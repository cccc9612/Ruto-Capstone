import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAReviewThunk, updateReviewThunk } from "../../../redux/review";
import { useModal } from "../../../context/Modal";
import "./UpdateReviews.css"


function UpdateReview({ reviewId, reviewContent, postReview }) {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    console.log("review in component========", reviewContent)

    // const [review, setReview] = useState(targetReview?.review || "")
    const [review, setReview] = useState(reviewContent)



    // useEffect(() => {
    //     dispatch(getSingleReviewThunk(reviewId))
    // }, [dispatch, reviewId])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("review", review);
        await dispatch(updateReviewThunk(formData, reviewId));
        postReview();
        closeModal();
    }

    const isDisabled = review?.length < 10;

    return (
        <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="create-review-modal-container"
        >
            <h1>Update your review</h1>
            <div className="create-review-textarea-container">
                <textarea
                    placeholder="Leave your review here..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <div>{review?.length < 10 && <p className="update-review-validator">review needs 10 or more characters</p>}</div>
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

export default UpdateReview;
