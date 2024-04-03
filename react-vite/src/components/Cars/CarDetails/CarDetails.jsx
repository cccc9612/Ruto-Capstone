import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { useState } from "react";
// import { useModal } from "../../../context/Modal";
import { getACarThunk } from "../../../redux/car";
import { useParams, Link } from "react-router-dom";
import "./CarDetails.css"
import defaultImage from '../CarList/default-car-img.png'
// import CreateReviews from "../../Reviews/CreateReviews";
// import UpdateReviews from "../../Reviews/UpdateReviews";
// import DeleteReviews from "../../Reviews/DeleteReviews";
// import CarReviews from "../../Reviews/CarReviews/CarReviews";

function CarDetails() {
    const dispatch = useDispatch();
    const { carId } = useParams();
    // const { setModalContent } = useModal();
    const currentUser = useSelector(state => state.session.user);
    // const session = useSelector(state => state.session);

    const carState = useSelector(state => state.car);
    const car = carState.Cars[carId];

    // const reviewState = useSelector(state => state.reviews);
    // const review = reviewState.Reviews()


    // console.log('----------->>>>>', reviewState)


    useEffect(() => {
        dispatch(getACarThunk(carId))
    }, [dispatch, carId])


    // const owner = currentUser?.id == car.owner;
    // console.log("car.owner------", car.owner)
    // console.log("currentuser------", currentUser.id)
    // console.log(car.owner == currentUser.id)




    return (
        <div className="car-show-page-container">
            <div className="car-details-container">
                <img src={defaultImage} alt='default-image' style={{ width: "300px" }} />
                <div>
                    <span>{car?.year}</span>
                    <span>${car?.model}</span>
                    <span>{car?.make}</span>
                    <span>{car?.city}</span>
                    <span>{car?.state}</span>
                    <span>{car?.mileage}</span>
                    <div>
                        <h3>Description</h3>
                        <p>{car?.description}</p>
                    </div>
                </div>
                <div className="car-detail-host-div">
                    <div className="car-detail-host-info">
                        <h4>Hosted By</h4>
                        <h3>{currentUser.firstName}</h3>
                    </div>
                </div>
                <div className="all-reviews-container">

                    <div>
                        <h4 style={{ color: "#808080" }}>REVIEWS</h4>

                    </div>
                </div>

            </div>
            <Link to="/cars" className="back-button">Back to Cars</Link>
        </div>

    )
}

export default CarDetails;
