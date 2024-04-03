import { useParams } from "react-router-dom"
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useModal } from "../../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentReviewsThunk } from "../../../redux/review";
import ReviewList from '../ReviewList';
import DeleteReviews from "../DeleteReviews";
import UpdateReviews from "../UpdateReviews";
import "./ManageReviews.css"


function ManageReviews() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { setModalContent } = useModal();
    const { carId } = useParams();
    // const carState = useSelector(state => state.car);
    // const car = carState.Cars[carId]
    const reviewState = useSelector(state => state.review);
    const reviews = Object.values(reviewState?.Reviews)
    const currentUser = useSelector(state => state.session.user)
    // const carsObj = useSelector(state => state.cars
    const [updateReview, setUpdateReview] = useState(false);

    // console.log("reviewsObj >>>>>>>>>>", reviewState)
    // console.log("reviews >>>>>>>>>>", reviews)



    useEffect(() => {
        if (!currentUser) navigate('/');
        dispatch(getCurrentReviewsThunk())
    }, [dispatch, currentUser, navigate, updateReview])


    const handleUpdate = (reviewId, reviewContent) => {
        setModalContent(<UpdateReviews reviewId={reviewId} reviewText={reviewContent} updateReview={() => setUpdateReview(prev => !prev)} />)
    }
    const handleDelete = (reviewId) => {
        setModalContent(<DeleteReviews reviewId={reviewId} />)
    }


    return (
        <div className="manage-your-reviews-container">
            <h1 className="manage-your-review-h1">Manage Your Reviews</h1>
            <section>
                <div className="reviews-container">
                    {reviews?.map((review) => {
                        return (
                            <div key={review.id}>
                                <NavLink to={`/cars/${carId}`} className="review-item-card-navlink">
                                    <ReviewList review={review} />
                                </NavLink>
                                <button className="delete-review-button" onClick={() => handleUpdate(review.id)}>Update</button>
                                <button className="delete-review-button" onClick={() => handleDelete(review.id)}>Delete</button>
                            </div>
                        )
                    })}

                </div>
            </section>
        </div>
    )
}

export default ManageReviews;
