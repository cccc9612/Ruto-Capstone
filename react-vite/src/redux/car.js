const GET_CARS = 'car/getCars';
const GET_A_CAR = 'car/getACar';
const UPDATE_CAR = 'car/updateCar';
const DELETE_CAR = 'car/deleteCar';


/* ========== Action Creators ========== */

const getCarsAction = (cars) => {
    return {
        type: GET_CARS,
        payload: cars
    }
}

const getACarAction = (car) => {
    return {
        type: GET_A_CAR,
        payload: car
    }
}

const updateCarAction = (car) => {
    return {
        type: UPDATE_CAR,
        payload: car
    }
}

const deleteCarAction = (carId) => {
    return {
        type: DELETE_CAR,
        payload: carId
    }
}



/* ========== Thunks ========== */

export const getCarsThunk = () => async (dispatch) => {
    const response = await fetch('/api/cars', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    console.log('log data cars -------', data.cars)
    dispatch(getCarsAction(data.cars));

}


export const getACarThunk = (carId) => async (dispatch) => {
    const response = await fetch(`/api/cars/${carId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })

    const data = await response.json()
    dispatch(getACarAction(data))
    return data
}


export const getCurrentCarThunk = () => async (dispatch) => {
    const response = await fetch('api/cars/current', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    const data = await response.json()
    dispatch(getCarsAction(data.cars))
}


export const createNewCarThunk = (formData) => async (dispatch) => {
    const response = await fetch('/api/cars', {
        method: 'POST',
        body: formData
    });
    if (response.ok) {
        const newCar = await response.json()
        dispatch(getACarAction(newCar))
    }
}

export const updateCarThunk = (formData, carId) => async (dispatch) => {
    const response = await fetch(`/api/cars/${carId}`, {
        method: 'PUT',
        body: formData
    });
    if (response.ok) {
        const updatedCar = await response.json()
        dispatch(updateCarAction(updatedCar))
    }
}

export const deleteCarThunk = (carId) => async (dispatch) => {
    const response = await fetch(`/api/cars/${carId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        dispatch(deleteCarAction(carId))
    }
}


/* ========== Reducer ========== */

const initialState = { Cars: {} }

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARS: {
            const newObj = {};
            action.payload.forEach(car => newObj[car.id] = { ...car });
            return { ...state, Cars: { ...newObj } }
        }
        case GET_A_CAR: {
            return { ...state, Cars: { ...state.Cars, [action.payload.id]: action.payload } }
        }
        case UPDATE_CAR: {
            return { ...state, Cars: { ...state.Cars, [action.payload.id]: action.payload } }
        }
        case DELETE_CAR: {
            const newState = { ...state };
            delete newState.Cars[action.payload];
            return newState
        }
        default:
            return state;
    }
}

export default carReducer;
