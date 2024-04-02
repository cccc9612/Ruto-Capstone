import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { deleteReviewThunk } from "../../../redux/review";
import "./DeleteReviews.css"

function DeleteReview({ reviewId, reviewDeleted }) {
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(deleteReviewThunk(reviewId));
        reviewDeleted();
        closeModal();
    }

    return (
        <div className="delete-review-modal-container">
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to delete this review?</p>
            <button className="delete-review-yes-button" onClick={handleDelete}>Yes (Delete Review)</button>
            <button className="delete-review-no-button" onClick={closeModal}>No (Keep Review)</button>
        </div>
    )
}

export default DeleteReview;
