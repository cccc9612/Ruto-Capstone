import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useModal } from "../../../context/Modal";
import { getACarThunk } from "../../../redux/car";
import { getAReviewThunk } from "../../../redux/review";
import { useParams, Link } from "react-router-dom";
import "./CarDetails.css"
import defaultImage from '../CarList/default-car-img.png'
import CreateReviews from "../../Reviews/CreateReviews";
import UpdateReviews from "../../Reviews/UpdateReviews";
import DeleteReviews from "../../Reviews/DeleteReviews";
// import CarReviews from "../../Reviews/CarReviews/CarReviews";

function CarDetails() {
    const dispatch = useDispatch();
    const { carId } = useParams();
    const currentUser = useSelector(state => state.session.user);
    // const session = useSelector(state => state.session);

    const carState = useSelector(state => state.car);
    const car = carState.Cars[carId];

    const reviewsObj = useSelector((state) => state.review)
    // console.log('----------->>>>>', reviewsObj)
    const reviews = Object.values(reviewsObj?.Reviews)


    const { setModalContent } = useModal();


    const [deleted, setDelete] = useState(false)
    const reRenderOnDelete = () => {
        setDelete(!deleted)
    }


    const [updated, setUpdated] = useState(false)
    const reRenderOnUpdate = () => {
        setUpdated(!updated)
    }


    const [posted, setPosted] = useState(false)
    const reRenderOnPost = () => {
        setPosted(!posted)
    }
    console.log(car)

    let hasPostedReview = false;


    useEffect(() => {
        dispatch(getACarThunk(carId))
        dispatch(getAReviewThunk(carId))

    }, [dispatch, carId, deleted, updated, posted, currentUser?.id, reviews.length])

    const userReview = reviews.find(review => review.user.id === currentUser?.id);
    if (userReview) {
        hasPostedReview = true;
    }


    const reviewOwnership = reviews.reduce((acc, review) => {
        acc[review.id] = review.user.id === currentUser?.id;
        return acc;
    }, {});

    // const owner = currentUser?.id == car?.owner;
    const carOwner = currentUser && car?.owner == currentUser?.id;

    // console.log("reviewOwner", reviewsObj?.Reviews[carId]?.user?.id)
    // console.log("car>>------", car)
    // console.log("currentuser = reviewowner?------", currentUser?.id == reviewsObj?.Reviews[carId]?.user?.id)

    // console.log("review user", review?.user_id)


    const handlePost = (carId) => {
        setModalContent(<CreateReviews carId={carId} reRenderOnPost={reRenderOnPost} />)
    }


    const handleUpdate = (reviewId, reviewContent) => {
        setModalContent(<UpdateReviews reviewId={reviewId} reviewContent={reviewContent} reRenderOnUpdate={reRenderOnUpdate} />)
    }

    const handleDelete = (reviewId) => {
        setModalContent(<DeleteReviews reviewId={reviewId} carId={carId} reRenderOnDelete={reRenderOnDelete} />)
    }


    return (
        <div className="car-show-page-container">
            <div className="car-details-container">
                <img src={defaultImage} alt='default-image' style={{ width: "300px" }} />
                <div className="car-info-section">
                    <div className="car-info-title">
                        <h2>{car?.year} {car?.make} {car?.model}</h2>
                    </div>
                    <h3>Location: {car?.city}, {car?.state} </h3>
                    <h3>Mileage: {car?.mileage}</h3>
                    <h3>Price: ${car?.price}</h3>
                    <div className="car-info-right-side">
                        <h3>Description</h3>
                        <p>{car?.description}</p>
                    </div>
                </div>
                {/* <div className="car-detail-host-div">
                    <div className="car-detail-host-info">
                        <h4>Hosted By</h4>
                        <h3>{car?.users.first_name}</h3>
                    </div>
                </div> */}
                <div className="all-reviews-container">
                    <div>
                        <h4 style={{ color: "#808080" }}>Reviews</h4>
                    </div>

                    {reviews.length > 0 ?
                        (reviews?.map((review) => {
                            // const ownReview = currentUser?.id == review?.user.id
                            console.log("review.user_id", review?.user.id)
                            console.log("currentUser.id ", currentUser?.id)
                            console.log("same person? ", currentUser?.id == review?.user.id)
                            return (
                                <div key={review.id}>
                                    <p>{review.review}</p>
                                    {currentUser && reviewOwnership[review.id] && (
                                        <>
                                            {<button className="delete-review-button" onClick={() => handleDelete(review?.id)}>Delete</button>}
                                            {<button className="update-review-button" onClick={() => handleUpdate(review?.id, review?.review)}>Update</button>}
                                        </>
                                    )}
                                </div>
                            )
                        })) : (
                            <h3>Be the first one to post a review!</h3>
                        )}

                    {
                        !currentUser || carOwner || hasPostedReview ? (
                            <div>
                                {hasPostedReview ? (
                                    <h4 style={{ color: 'red' }}>You have already posted a review for this car.</h4>
                                ) : (
                                    <h4>Sorry, review is unavailable for you. You cannot review your own cars or you need to be logged in.</h4>
                                )}
                            </div>
                        ) : (
                            <>
                                <h3 className="leave-review-title">Leave your review here!</h3>
                                <button onClick={() => handlePost(carId)}>Post Review</button>
                            </>
                        )
                    }
                    {/* {currentUser && !carOwner && reviews.length === 0 && (
                        <p>Be the first to post a review!</p>
                    )} */}


                </div>
            </div>
            <Link to="/cars" className="back-button">Back to Cars</Link>
        </div >

    )
}

export default CarDetails;
