import './CarList.css'
import defaultImage from './default-car-img.png'
// import { NavLink } from 'react-router-dom'
// import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
// import { useNavigate } from 'react-router-dom'
// import { useContext } from 'react'


function CarList({ car }) {
    // const navigate = useNavigate()

    return (
        <div className="car-list-container">
            <img src={defaultImage} alt='default-img' style={{ width: "200px" }} />
            <div className="car-info-div">
                <p>{car.make}</p>
                <p>{car.model}</p>
                <p>${car.price}</p>
            </div>
        </div>
    )

}
export default CarList;
