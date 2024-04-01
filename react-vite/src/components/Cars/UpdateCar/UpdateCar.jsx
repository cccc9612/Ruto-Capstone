import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getACarThunk, updateCarThunk } from "../../../redux/car";
import "./UpdateCar.css"


function UpdateCar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { carId } = useParams();

    const carState = useSelector(state => state.car)
    const car = carState?.Cars[carId]

    const [price, setPrice] = useState(car?.price);
    const [year, setYear] = useState(car?.year);
    const [model, setModel] = useState(car?.model);
    const [make, setMake] = useState(car?.make);
    const [city, setCity] = useState(car?.city);
    const [state, setState] = useState(car?.state);
    const [mileage, setMileage] = useState(car?.mileage);
    const [description, setDescription] = useState(car?.description)
    const currentUser = useSelector(state => state.session.user)
    if (!currentUser) navigate("/")

    useEffect(() => {
        dispatch(getACarThunk(carId))
    }, [dispatch, carId])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("price", price);
        formData.append("year", year);
        formData.append("model", model);
        formData.append("make", make);
        formData.append("city", city);
        formData.append("state", state);
        formData.append("mileage", mileage);
        formData.append("description", description);
        await dispatch(updateCarThunk(formData, carId))
        navigate(`/cars/${carId}`)
    }

    const isDisabled = !price || !year || !mileage || model.length < 1 || city.length < 1 || state.length < 1 || description.length < 20;

    return (
        <div>
            <div className="update-car-title">
                <h1>Update your car</h1>
            </div>
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <div className="update-car-container">
                    <div className="update-car-input-section">
                        <label>
                            Price $
                        </label>
                        <input
                            type="number" step='1'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <div>{!price && <p className="update-car-validator">Price is required</p>}</div>
                    </div>

                    <div className="update-car-input-section">
                        <label>
                            Year
                        </label>
                        <input
                            type="number" step='1'
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                        <div>{!year && <p className="update-car-validator">Year is required</p>}</div>
                    </div>

                    <div className="update-car-input-section">
                        <label>
                            Model
                        </label>
                        <input
                            type="text"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                        />
                        <div>{!model && <p className="update-car-validator">Model is required</p>}</div>
                    </div>
                    <div className="update-car-input-section">
                        <label>
                            Make
                        </label>
                        <input
                            type="text"
                            value={make}
                            onChange={(e) => setMake(e.target.value)}
                        />
                        <div>{!make && <p className="update-car-validator">Make is required</p>}</div>
                    </div>
                    <div className="update-car-input-section">
                        <label>
                            City
                        </label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <div>{!city && <p className="update-car-validator">City is required</p>}</div>
                    </div>
                    <div className="update-car-input-section">
                        <label>
                            State
                        </label>
                        <input
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                        <div>{!state && <p className="update-car-validator">State is required</p>}</div>
                    </div>
                    <div className="update-car-input-section">
                        <label>
                            Mileage
                        </label>
                        <input
                            type="text"
                            value={mileage}
                            onChange={(e) => setMileage(e.target.value)}
                        />
                        <div>{!mileage && <p className="update-car-validator">Mileage is required</p>}</div>
                    </div>
                    <div className="update-car-input-section">
                        <label>
                            Description
                        </label>
                        <textarea
                            className="update-car-textarea"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <div>{!description && <p className="update-car-validator">Description is required</p>}</div>
                    </div>
                    <button
                        className={isDisabled ? "update-car-submit-button-disable" : "update-car-submit-button-active"}
                        type="submit"
                        disabled={isDisabled}
                    >
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
}

export default UpdateCar;
