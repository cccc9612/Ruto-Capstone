const GET_CARS = 'car/getCarsThunk';
const GET_A_CAR = 'car/getACarThunkk'


/* ========== Action Creators ========== */

const getCarsAction = (cars) => ({
    type: GET_CARS,
    payload: cars
})

const getACarAction = (car) => ({
    type: GET_A_CAR,
    payload: car
})



/* ========== Thunks ========== */

export const getCarsThunk = () => async (dispatch) => {
    const response = await fetch('/api/cars', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();

    dispatch(getCarsAction(data.cars));

}


export const getACarThunk = (carId) => async (dispatch) => {
    const response = await fetch(`/api/cars/${carId}`)

    if (response.ok) {
        const car = await response.json()
        dispatch(getACarAction(car))
    } else {
        const errors = await response.json()
        return errors
    }
}


/* ========== Reducer ========== */

const initialState = { Cars: {} }

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARS: {
            const newState = {};
            action.payload.forEach(car => newState[car.id] = { ...car });
            return { ...state, Cars: { ...newState } };
        }
        case GET_A_CAR: {
            const newState = { ...state }
            newState[action.car.id] = action.car
            return newState;
        }
        default:
            return state;
    }
}

export default carReducer;
