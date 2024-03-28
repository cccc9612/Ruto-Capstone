import { NavLink, Link } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import logo from './ruto-logo.png'

function Navigation() {
  return (
    <header className="header-container">
      <Link to="/">
        <img className="logo" src={logo} alt='logo' />
      </Link>
      <div id="host-box">
        <NavLink to>Become a host</NavLink>
      </div>
      <div className="profile-button-div">
        <ProfileButton />
      </div>
    </header >
  )
}

export default Navigation;
