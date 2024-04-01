import { useModal } from "../../../context/Modal"
import { useDispatch } from "react-redux";
import { deleteCarThunk } from "../../../redux/car";
import "./DeleteCar.css"

function DeleteCar({ carId }) {
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteCarThunk(carId));
        closeModal();
    }

    return (
        <div className="delete-car-modal-container">
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to delete this car?</p>
            <button className="delete-car-yes-button" onClick={handleDelete}>Yes (Delete Car)</button>
            <button className="delete-car-no-button" onClick={closeModal}>No (Keep Car)</button>
        </div>
    )
}

export default DeleteCar;
