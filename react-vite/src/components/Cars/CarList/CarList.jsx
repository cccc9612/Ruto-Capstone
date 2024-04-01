import './CarList.css'
import defaultImage from './default-car-img.png'


function CarList({ car }) {
    // const navigate = useNavigate()

    return (
        <div className="car-card-container">
            <img src={defaultImage} alt='default-img' style={{ width: "200px" }} />
            <div className="car-info-div">
                <p>{car.make}</p>
                <p>{car.model}</p>
                <p>${car.price}</p>
                <p>{car.city}, {car.state}</p>
            </div>
        </div>
    )

}
export default CarList;
