import { useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "./HomePage.css";
import moment from "moment"
import homepageImage from "./images/homepage-cover.png"
import bmw from './images/bmw-clipart.png'
import honolulu from './images/honolulu-clipart.png'
import jeep from './images/jeep-clipart.png'
import london from './images/london-clipart.png'
import losAngeles from './images/los-angeles-clip-art.png'
import paris from './images/paris-clipart.png'
import porsche from './images/porsche-clipart.png'
import subaru from './images/subaru-clipart.png'
import sydney from './images/sydney-clipart.png'
import tesla from './images/tesla-clipart.png'
import toronto from './images/toronto-clipart.png'


export const HomePage = () => {
    const navigate = useNavigate();
    const [where, setWhere] = useState("")
    const [from, setFrom] = useState(moment().format("YYYY-MM-DD"))
    const [until, setUntil] = useState(moment().add(7, 'days').format("YYYY-MM-DD"))

    return (
        <div className="homepage">
            <form className="homepage-search-box" onSubmit={e => e.preventDefault()}>
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
                <button className="homepage-search-btn" onClick={() => alert("Feature coming soon!")}><FaSearch /></button>
            </form>
            <div className="homepage-background-img">
                <img src={homepageImage} alt='homepageImage' />
            </div>
            <div className="homepage-title-section">
                <h1 style={{ fontSize: "30" }}>Find your drive</h1>
                <h2>Car rentals from trusted, local hosts</h2>
                <div className="purple-bar">
                </div>
            </div>
            <div className="homepage-catetory">
                <div className="homepage-makes-div">
                    <h3>Browse by make</h3>
                    <div className="makes-cards-div">
                        <div className="category-pic" onClick={() => {
                            navigate("/cars")
                        }}>
                            <h4>Jeep</h4>
                            <img className="category-pic" src={jeep} alt='category-pic' />
                        </div>
                        <div className="category-pic" onClick={() => {
                            navigate("/cars")
                        }}>
                            <h4>Tesla</h4>
                            <img className="category-pic" src={tesla} alt='category-pic' />
                        </div>
                        <div className="category-pic" onClick={() => {
                            navigate("/cars")
                        }}>
                            <h4>Subaru</h4>
                            <img className="category-pic" src={subaru} alt='category-pic' />
                        </div>
                        <div className="category-pic" onClick={() => {
                            navigate("/cars")
                        }}>
                            <h4>Porsche</h4>
                            <img className="category-pic" src={porsche} alt='category-pic' />
                        </div>
                        <div className="category-pic" onClick={() => {
                            navigate("/cars")
                        }}>
                            <h4>BMW</h4>
                            <img className="category-pic" src={bmw} alt='category-pic' />
                        </div>
                    </div>
                </div>
                <div className="homepage-makes-div">
                    <h3>Browse by location</h3>
                    <div className="makes-cards-div">
                        <div className="category-pic" onClick={() => {
                            navigate("/cars")
                        }}>
                            <h4>Los Angeles</h4>
                            <img className="category-pic" src={losAngeles} alt='category-pic' />
                        </div>
                        <div className="category-pic" onClick={() => {
                            navigate("/cars")
                        }}>
                            <h4>Honolulu</h4>
                            <img className="category-pic" src={honolulu} alt='category-pic' />
                        </div>
                        <div className="category-pic" onClick={() => {
                            navigate("/cars")
                        }}>
                            <h4>Paris</h4>
                            <img className="category-pic" src={paris} alt='category-pic' />
                        </div>
                        <div className="category-pic" onClick={() => {
                            navigate("/cars")
                        }}>
                            <h4>Sydney</h4>
                            <img className="category-pic" src={sydney} alt='category-pic' />
                        </div>
                        <div className="category-pic" onClick={() => {
                            navigate("/cars")
                        }}>
                            <h4>London</h4>
                            <img className="category-pic" src={london} alt='category-pic' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
