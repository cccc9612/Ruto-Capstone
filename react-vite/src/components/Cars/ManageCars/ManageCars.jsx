import { Link, useParams } from "react-router-dom"
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useModal } from "../../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentCarThunk } from "../../../redux/car";
import CarList from "../CarList";
import DeleteCar from "../DeleteCar";
import "./ManageCars.css"


function ManageCars() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { setModalContent } = useModal();
    const carState = useSelector(state => state.car);
    const cars = Object.values(carState?.Cars)
    const currentUser = useSelector(state => state.session.user)

    // const userCars = Object.values(carState?.Cars).filter(car => car.userId === currentUser?.id);
    // console.log('car.userId', carState.id)
    // console.log('currentuserId', currentUser.id)

    useEffect(() => {
        if (!currentUser) navigate('/');
        dispatch(getCurrentCarThunk())
    }, [dispatch, currentUser, navigate])


    const handleDelete = (carId) => {
        setModalContent(<DeleteCar carId={carId} />)
    }


    return (
        <div className="manage-your-car-whole-container">
            <h1 className="manage-your-car-h1">Manage Your Cars</h1>
            <button className="create-car-button"><Link to={`/cars/new`} className="create-car-link">create a new car</Link></button>
            <section>
                <div className="cars-container">
                    {cars?.map((car) => {
                        return (
                            <div key={car.id}>
                                <NavLink to={`/cars/${car.id}`} className="car-item-card-navlink">
                                    <CarList car={car} />
                                </NavLink>
                                <button className="update-car-button"><Link className="update-car-link" to={`/cars/${car.id}/edit`}>Update</Link></button>
                                <button className="delete-car-button" onClick={() => handleDelete(car.id)}>Delete</button>
                            </div>
                        )
                    })}

                </div>
            </section>
        </div>
    )
}

export default ManageCars;
