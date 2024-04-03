import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAReviewThunk } from "../../../redux/review"
import { useParams } from "react-router-dom"
import DeleteReviews from '../DeleteReviews'
import OpenModalButton from "../../OpenModalButton/OpenModalButton"
import './CarReviews.css'

function CarReviews() {
    const dispatch = useDispatch()
    const { carId } = useParams()
    const reviewsObj = useSelector((state) => state.reviews)
    const reviews = reviewsObj.Reviews
    const sessionUser = useSelector((state) => state.session.user)

    useEffect(() => {
        dispatch(getAReviewThunk(carId))
    }, [dispatch, carId])

    if (!reviews) return null

    return (
        <section>
            {reviews.reverse().map((review) => (
                <div key={review.id}>
                    <h3 className="reviewer">{review.User?.firstName}</h3>
                    <p className="comments">{review.review}</p>
                    {sessionUser?.id === review.User?.id && (
                        <OpenModalButton buttonText={"Delete"} modalComponent={<DeleteReviews reviewId={review.id} carId={carId} />} />
                    )}
                </div>
            ))}
        </section>
    )
}

export default CarReviews;
