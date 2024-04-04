import { NavLink, Link } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./Navigation.css";
import logo from './ruto-logo.png'



function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  const handleHostClick = (e) => {
    if (!sessionUser) {
      e.preventDefault();
      alert('Please sign up or log in first');
    }
  };


  return (
    <header className="header-container">
      <div className="header-left">
        <Link to="/">
          <img className="logo" src={logo} alt='logo' />
        </Link>
      </div>
      <div className="header-right">
        <div id="host-box">
          <NavLink to='/cars/new' onClick={handleHostClick}>Become a host</NavLink>
        </div>
        <div className="profile-button-div">
          <ProfileButton />
        </div>
      </div>
    </header >
  )
}

export default Navigation;
