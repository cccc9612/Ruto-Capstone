import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { useState } from "react";
// import { useModal } from "../../../context/Modal";
import { getACarThunk } from "../../../redux/car";
import { useParams, Link } from "react-router-dom";
import "./CarDetails.css"
import defaultImage from '../CarList/default-car-img.png'
// import CreateReviews from "../../Reviews/CreateReviews";
// import UpdateReviews from "../../Reviews/UpdateReviews/UpdateReviews";
// import DeleteReviews from "../../Reviews/DeleteReviews";

function CarDetails() {
    const dispatch = useDispatch();
    const { carId } = useParams();
    // const { setModalContent } = useModal();

    // const currentUser = useSelector(state => state.session.user);
    const carState = useSelector(state => state.car);
    const car = carState.Cars[carId]
    // const session = useSelector(state => state.session);
    // const reviewArray = car?.reviews;
    // const [postReview, setPostReview] = useState(false);
    // const [updateReview, setUpdateReview] = useState(false);
    // const [deleteReview, setDeleteReview] = useState(false);



    console.log('----------->>>>>', car)


    useEffect(() => {
        dispatch(getACarThunk(carId))
    }, [dispatch, carId])

    // const ishidden = () => {
    //     if (!currentUser) return true;
    //     if (currentUser && reviewArray) {
    //         for (let review of reviewArray) {
    //             if (review.user_id === currentUser.id) return true
    //         }
    //         return false;
    //     }
    // }


    // const handleDelete = (reviewId) => {
    //     setModalContent(<DeleteReviews reviewId={reviewId} deleteReview={() => setDeleteReview(prev => !prev)} />)
    // }

    // const handleReview = (carId) => {
    //     setModalContent(<CreateReviews carId={carId} postReview={() => setPostReview(prev => !prev)} />)
    // }

    // const handleUpdate = (reviewId, reviewContent) => {
    //     setModalContent(<UpdateReviews reviewId={reviewId} reviewText={reviewContent} updateReview={() => setUpdateReview(prev => !prev)} />)
    // }

    return (
        <div className="car-show-page-container">
            <div className="car-details-container">
                <img src={defaultImage} alt='default-image' style={{ width: "300px" }} />
                <div>
                    <span>{car?.year}</span>
                    <span>${car?.model}</span>
                    <span>{car?.make}</span>
                    <span>{car?.city}</span>
                    <span>{car?.state}</span>
                    <span>{car?.mileage}</span>
                    <div>
                        <h3>Description</h3>
                        <p>{car?.description}</p>
                    </div>
                </div>
                {/* <div className="all-reviews-container">
                    <div className="post-your-review-container">
                        {ishidden() ? null : (<button className="post-your-review-button" onClick={() => handleReview(carId)}>Post Your Review</button>)}
                    </div>
                    {car?.reviews.map((review) => {
                        return (

                            <div key={review.id} className="single-review-container">
                                <h4>Review by {review?.user.first_name}</h4>
                                <p>{review?.review}</p>
                                {currentUser && currentUser?.id === review?.user_id && <button className="delete-review-button" onClick={() => handleDelete(review?.id)}>Delete</button>}
                                {currentUser && currentUser?.id === review?.user_id && <button className="update-review-button" onClick={() => handleUpdate(review?.id, review?.review, review?.rating)}>Update</button>}
                            </div>
                        )
                    })}

                </div> */}
            </div>
            <Link to="/cars" className="back-button">Back to Cars</Link>
        </div>

    )
}

export default CarDetails;
