import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCarsThunk } from "../../../redux/car";
import { NavLink } from "react-router-dom";
import CarList from "../CarList";
import "./ViewCars.css"

function ViewCars() {
  const dispatch = useDispatch();
  const carState = useSelector(state => state.car);
  const cars = Object.values(carState?.Cars);

  useEffect(() => {
    dispatch(getCarsThunk())
  }, [dispatch])

  // console.log('-----------', cars)
  // console.log('........', carState)
  // console.log('>>>>>>>>>>', Object.values(carState?.Cars));


  return (
    <section>
      <div className="cars-container">

        {cars?.map((car) => {
          return (
            <NavLink key={car.id} to={`/cars/${car.id}`} className="car-item-card-navlink">
              <CarList car={car} />
            </NavLink>
          )
        })}
      </div>
    </section>
  )
}

export default ViewCars;
