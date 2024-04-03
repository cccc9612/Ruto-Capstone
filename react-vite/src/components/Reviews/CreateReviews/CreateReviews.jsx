import { useState } from "react";
import { useModal } from "../../../context/Modal";
import { useDispatch } from "react-redux";
import { createReviewThunk } from "../../../redux/review";
import "./CreateReviews.css"

function CreateReviews({ carId, postReview }) {
    const { closeModal } = useModal();
    const dispatch = useDispatch();
    const [review, setReview] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("review", review);
        await dispatch(createReviewThunk(formData, carId));
        postReview();
        closeModal();
    }

    const isDisabled = review.length < 10;

    return (
        <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="create-review-container"
        >
            <h1>Post Review Here</h1>
            <div className="create-review-input-section">
                <textarea
                    placeholder="Let others know about your experience!"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <div>{review?.length < 10 && <p className="create-review-validator">Minumum 10 characters required</p>}</div>
            </div>
            <button
                className={isDisabled ? "create-review-submit-button-disable" : "create-review-submit-button-active"}
                type="submit"
                disabled={isDisabled}
            >
                Submit Your Review
            </button>
        </form>
    )
}

export default CreateReviews;
