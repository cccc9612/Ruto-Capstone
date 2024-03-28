import { useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "./HomePage.css";
import moment from "moment"


export const HomePage = () => {
    const navigate = useNavigate();
    const [where, setWhere] = useState("")
    const [from, setFrom] = useState(moment().format("YYYY-MM-DD"))
    const [until, setUntil] = useState(moment().add(7, 'days').format("YYYY-MM-DD"))

    return (
        <div className="home-page">
            <div className="home-page-search">
                <form className="home-page-search-container" onSubmit={e => e.preventDefault()}>
                    <div id="where-div">
                        <label>Where</label>
                        <input type="text" placeholder="City or State" value={where} onChange={e => setWhere(e.target.value)} />
                    </div>
                    <div id="from-div">
                        <label>From</label>
                        <input type="date" value={from} onChange={e => setFrom(e.target.value)} />
                    </div>
                    <div id="until-div">
                        <label>Until</label>
                        <input type="date" value={until} onChange={e => setUntil(e.target.value)} />
                    </div>
                    <button className="home-page-search-btn" onClick={() => alert("Feature coming soon!")}><FaSearch /></button>
                </form>
            </div>

            <div className="home-page-catchphrases">
                <h1>Find your drive</h1>
                <h2>Car rentals from trusted, local hosts</h2>
                <div className="purple-bar">
                </div>
            </div>

            <div className="home-page-makes-div">
                <h3>Browse by make</h3>
                <div className="makes-cards-div">
                    <div className="home-page-make-card" onClick={() => {
                        navigate("/cars")
                    }}>
                        <h4>Jeep</h4>
                    </div>
                    <div className="home-page-make-card" onClick={() => {
                        navigate("/cars")
                    }}>
                        <h4>Tesla</h4>
                    </div>
                    <div className="home-page-make-card" onClick={() => {
                        navigate("/cars")
                    }}>
                        <h4>Subaru</h4>
                    </div>
                    <div className="home-page-make-card" onClick={() => {
                        navigate("/cars")
                    }}>
                        <h4>Porsche</h4>
                    </div>
                    <div className="home-page-make-card" onClick={() => {
                        navigate("/cars")
                    }}>
                        <h4>BMW</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};
