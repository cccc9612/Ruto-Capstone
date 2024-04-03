import './ReviewList.css'
import defaultImage from '../../Cars/CarList/default-car-img.png'


function ReviewList({ review }) {


    return (
        <div className="car-card-container">
            <img src={defaultImage} alt='default-img' style={{ width: "300px" }} />
            <div className="car-info-div">

                <p>{review.car_id} </p>
                <p>{review.review}</p>
            </div>
        </div>
    )

}
export default ReviewList;
