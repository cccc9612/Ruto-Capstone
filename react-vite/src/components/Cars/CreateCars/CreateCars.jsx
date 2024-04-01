import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./CreateCars.css"
import { createNewCarThunk } from "../../../redux/car";


function CreateCars() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [price, setPrice] = useState("");
    const [year, setYear] = useState("");
    const [model, setModel] = useState("");
    const [make, setMake] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [mileage, setMileage] = useState("");
    const [description, setDescription] = useState("")
    const [imageLoading, setImageLoading] = useState(false);
    const [errors, setErrors] = useState({})
    // const [duration, setDuration] = useState("");
    const sessionUser = useSelector(state => state.session.user);
    if (!sessionUser) navigate('/')

    useEffect(() => {
        const validationObj = {};

        if (!price || price < 0) {
            validationObj.price = "Price is required and must greater than 0"
        }

        if (!year || price < 1920) {
            validationObj.year = "Year is required and must greater than 1920"
        }

        if (model.length < 1) {
            validationObj.model = "Model is required"
        }

        if (city.length < 1) {
            validationObj.city = "City is required"
        }

        if (state.length < 1) {
            validationObj.state = "State is required"
        }

        if (!mileage) {
            validationObj.mileage = "Mileage is required"
        }

        if (description.length < 20) {
            validationObj.description = "Description needs 20 or more characters"
        }

        setErrors(validationObj)
    }, [price, year, model, city, state, mileage, description])


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Object.keys(errors).length === 0) {
            const formData = new FormData();
            formData.append("price", price);
            formData.append("year", year);
            formData.append("model", model);
            formData.append("make", make);
            formData.append("city", city);
            formData.append("state", state);
            formData.append("mileage", mileage);
            formData.append("description", description);

            await dispatch(createNewCarThunk(formData))
            setImageLoading(true);
            navigate("/cars/current")
        }
    }

    const isDisabled = !price || !year || !mileage || model.length < 1 || city.length < 1 || state.length < 1 || description.length < 20;

    return (
        <div >
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <div className="create-car-container">
                    <div className="create-form-left">
                        <div className="create-car-input-section">
                            <label>
                                Price $
                            </label>
                            <input
                                type="number" step='1'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <div>{errors.price && <p className="create-car-validator">{errors.price}</p>}</div>
                        </div>

                        <div className="create-car-input-section">
                            <label>
                                Year
                            </label>
                            <input
                                type="number" step='1'
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                            <div>{errors.year && <p className="create-car-validator">{errors.year}</p>}</div>
                        </div>
                        <div className="create-car-input-section">
                            <label>
                                Model
                            </label>
                            <input
                                type="text"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                            />
                            <div>{errors.model && <p className="create-car-validator">{errors.model}</p>}</div>
                        </div>

                        <div className="create-car-input-section">
                            <label>
                                Make
                            </label>
                            <input
                                type="text"
                                value={make}
                                onChange={(e) => setMake(e.target.value)}
                            />
                            <div>{errors.make && <p className="create-car-validator">{errors.make}</p>}</div>
                        </div>
                    </div>
                    <div className="create-form-right">
                        <div className="create-car-input-section">
                            <label>
                                City
                            </label>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <div>{errors.city && <p className="create-car-validator">{errors.city}</p>}</div>
                        </div>
                        <div className="create-car-input-section">
                            <label>
                                State
                            </label>
                            <input
                                type="text"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                            <div>{errors.state && <p className="create-car-validator">{errors.state}</p>}</div>
                        </div>
                        <div className="create-car-input-section">
                            <label>
                                Mileage
                            </label>
                            <input
                                type="number" step='1'
                                value={mileage}
                                onChange={(e) => setMileage(e.target.value)}
                            />
                            <div>{errors.mileage && <p className="create-car-validator">{errors.mileage}</p>}</div>
                        </div>
                        <div className="create-car-input-section">
                            <label>
                                Description
                            </label>
                            <textarea
                                className="create-car-textarea"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <div>{errors.description && <p className="create-car-validator">{errors.description}</p>}</div>
                        </div>
                    </div>
                    <button
                        className={isDisabled ? "create-car-submit-button-disable" : "create-car-submit-button-active"}
                        type="submit"
                        disabled={isDisabled}
                    >
                        Submit
                    </button>
                    {(imageLoading) && <p>Loading...</p>}
                </div>
            </form>
        </div>
    )

}

export default CreateCars;
