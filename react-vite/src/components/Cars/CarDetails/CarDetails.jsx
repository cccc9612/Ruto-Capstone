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



    // const review = reviewState.Reviews()

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

    console.log('~~~~~~~~~~~', currentUser)
    console.log('...........', currentUser?.id)
    console.log(car)


    useEffect(() => {
        dispatch(getACarThunk(carId))
        dispatch(getAReviewThunk(carId))
    }, [dispatch, carId, deleted, updated, posted])


    // const owner = currentUser?.id == car.owner;
    // console.log("car.owner------", car.owner)
    // console.log("currentuser------", currentUser?.id)
    // console.log('ownerrr', owner)
    console.log(car.owner == currentUser.id)

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
                    <h2>{car?.year} {car?.make} {car?.model}</h2>
                    <h3>Location: {car?.city}, {car?.state} </h3>
                    <h3>Mileage: {car?.mileage}</h3>
                    <h3>Price: ${car?.price}</h3>
                    <div>
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

                    {reviews?.map((review) => {
                        return (
                            <div key={review.id}>
                                <p>{review.review}</p>
                                {<button className="delete-review-button" onClick={() => handleDelete(review?.id)}>Delete</button>}
                                {<button className="update-review-button" onClick={() => handleUpdate(review?.id, review?.review)}>Update</button>}
                            </div>
                        )
                    })}

                    {/* {currentUser && currentUser?.id !== car.owner && ( */}
                    <div>
                        <p>Be the first to post a review!</p>
                        {<button onClick={() => handlePost(carId)}>Post Review</button>}
                    </div>
                    {/* )} */}
                </div>

            </div>
            <Link to="/cars" className="back-button">Back to Cars</Link>
        </div>

    )
}

export default CarDetails;
