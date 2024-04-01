import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { useModal } from "../../../context/Modal";
import { getACarThunk } from "../../../redux/car";
import { useParams, Link } from "react-router-dom";
import "./CarDetails.css"
import defaultImage from '../CarList/default-car-img.png'



function CarDetails() {
    const dispatch = useDispatch();
    const { carId } = useParams();
    // const { setModelContent } = useModal();

    // const currentUser = useSelector(state => state.session.user);
    const carState = useSelector(state => state.car);
    const car = carState.Cars[carId]
    // const session = useSelector(state => state.session);

    // console.log('----aaaa-----', car.Cars[carId])


    useEffect(() => {
        dispatch(getACarThunk(carId))
    }, [dispatch, carId])

    // const ishidden = () => {
    //     if (!currentUser) return true;
    //     // if(currentUser && reviewArray) {
    //     //     for (let review of reviewArray) {
    //     //         if (review.user_id === currentUser.id) return true
    //     //     }
    //     //     return false;
    //     // }
    // }

    return (
        <div className="car-show-page-container">
            <div className="car-details-container">
                <img src={defaultImage} alt='default-image' style={{ width: "300px" }} />
                <div>
                    <p>{car?.year}</p>
                    <p>${car?.price}</p>
                    <div>
                        <h3>Description</h3>
                        <p>{car?.description}</p>
                    </div>
                </div>
            </div>
            <Link to="/cars" className="back-button">Back to Cars</Link>

        </div>

    )
}

export default CarDetails;
