const GET_A_REVIEW = 'review/getAReview';
const CREATE_REVIEW = 'review/createReview';
const UPDATE_REVIEW = 'review/updateReview';
const DELETE_REVIEW = 'review/deleteReview'


/* ========== Action Creators ========== */

const getAReviewAction = (review) => {
    return {
        type: GET_A_REVIEW,
        payload: review
    }
}
const createReviewAction = (review) => {
    return {
        type: CREATE_REVIEW,
        payload: review
    }
}

const updateReviewAction = (review) => {
    return {
        type: UPDATE_REVIEW,
        payload: review
    }
}

const deleteReviewAction = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        payload: reviewId
    }
}


/* ========== Thunks ========== */

export const getAReviewThunk = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const review = await response.json()
    dispatch(getAReviewAction(review))

}

export const createReviewThunk = (formData, carId) => async (dispatch) => {
    const response = await fetch(`/api/cars/${carId}/reviews`, {
        method: 'POST',
        body: formData
    });
    if (response.ok) {
        const newReview = await response.json()
        dispatch(createReviewAction(newReview))
    }
}


export const updateReviewThunk = (formData, reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'PUT',
        body: formData
    });
    if (response.ok) {
        const updatedReview = await response.json()
        dispatch(updateReviewAction(updatedReview))
    }
}

export const deleteReviewThunk = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        dispatch(deleteReviewAction(reviewId))
    }
}


/* ========== Reducer ========== */

const reviewReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_A_REVIEW: {
            return { ...state, [action.payload.id]: action.payload }
        }
        case CREATE_REVIEW: {
            return { ...state, [action.payload.id]: action.payload }
        }
        case UPDATE_REVIEW: {
            return { ...state, [action.payload.id]: action.payload }
        }
        case DELETE_REVIEW: {
            const newState = { ...state }
            delete newState[action.payload]
            return newState;
        }
        default:
            return state;
    }
}

export default reviewReducer;
