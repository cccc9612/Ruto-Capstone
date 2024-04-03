import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateReviewThunk } from "../../../redux/review";
import { useModal } from "../../../context/Modal";
import "./UpdateReviews.css"



function UpdateReviews({ reviewId, reviewContent, reRenderOnUpdate }) {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    // const { carId } = useParams();

    const [review, setReview] = useState(reviewContent)
    console.log(".........>>>>>>>", reviewContent)



    const handleSubmit = async (e) => {

        e.preventDefault();
        const formData = new FormData();

        formData.append("review", review);
        await dispatch(updateReviewThunk(formData, reviewId));
        closeModal();
        reRenderOnUpdate();

    }

    const isDisabled = review?.length < 10;

    return (
        <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="update-review-modal-container"
        >
            <h1>Update Your Review</h1>
            <div className="update-review-input-box">
                <textarea
                    placeholder="Minimum 10 characters required :)"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <div>{review?.length < 10 && <p className="update-review-validator">Tell us more about your thoughts...?</p>}</div>
            </div>
            <button
                className={isDisabled ? "update-review-submit-button-disable" : "update-review-submit-button-active"}
                type="submit"
                disabled={isDisabled}
            >
                Submit
            </button>
        </form>
    )
}

export default UpdateReviews;
