import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCarsThunk } from "../../../redux/car";
import { NavLink } from "react-router-dom";
import CarList from "../CarList";
import "./ViewCars.css"

function ViewCars() {
  const dispatch = useDispatch();
  const carState = useSelector(state => state.car);
  console.log("carState in component=========>", carState)

  const cars = Object.values(carState?.Cars);
  console.log("cars in component================>", cars)

  useEffect(() => {
    dispatch(getCarsThunk())
  }, [dispatch])

  return (
    <section>
      <div className="cars-container">
        {cars?.map((car) => {
          return (
            <NavLink key={car.id} to={`/cars/${car.id}`} className="product-item-card-navlink">
              <CarList car={car} />
            </NavLink>
          )
        })}
      </div>
    </section>
  )
}

export default ViewCars;
