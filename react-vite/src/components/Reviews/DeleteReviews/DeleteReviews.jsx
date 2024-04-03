import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { deleteReviewThunk } from "../../../redux/review";
import "./DeleteReviews.css";
import { useNavigate } from "react-router-dom";

function DeleteReview({ reviewId, reRenderOnDelete }) {
    const { closeModal } = useModal();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(deleteReviewThunk(reviewId));
        closeModal();
        reRenderOnDelete();
        navigate('/')
    }

    return (
        <div className="delete-review-modal-container">
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to delete this review?</p>
            <button className="delete-review-yes-button" onClick={handleDelete}>Yes</button>
            <button className="delete-review-no-button" onClick={closeModal}>No</button>
        </div>
    )
}

export default DeleteReview;
