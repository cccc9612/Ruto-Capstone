import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaBars, FaRegUserCircle } from 'react-icons/fa';
import { thunkLogout } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { NavLink, useNavigate } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { PiRoadHorizon } from "react-icons/pi";
import { IoCarOutline } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { MdManageSearch } from "react-icons/md";







function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.session.user);
  const ulRef = useRef();
  const navigate = useNavigate();


  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout())
      .then(() => navigate('/'))
    closeMenu();
  };


  return (
    <>
      <button
        className={showMenu ? "profile-button-open" : "profile-button-close"}
        onClick={toggleMenu}>
        <FaBars />
        <FaRegUserCircle />
      </button>
      {showMenu && (
        <ul className="profile-dropdown" ref={ulRef}>
          {user ? (
            <>
              <div className="profile-dropdown-links-div">
                <NavLink to={`/users/${user.id}/favorites`}
                  onClick={toggleMenu}>
                  <p><MdFavoriteBorder className="dropdown-icon" /> Favorites</p>
                </NavLink>
                <NavLink to={`/users/trips`} onClick={toggleMenu}>
                  <p><PiRoadHorizon className="dropdown-icon" /> Trips</p>
                </NavLink>
              </div>
              <div className="profile-dropdown-user-div">
                <NavLink to={`/cars/new`} onClick={toggleMenu}>
                  <p><IoCarOutline className="dropdown-icon" /> Add a car</p>
                </NavLink>
              </div>
              <div className="profile-dropdown-manage-div">
                <NavLink to={'/cars/current'} onClick={toggleMenu}>
                  <p><MdManageSearch className="dropdown-icon" /> Manage Cars</p>
                </NavLink>
                <NavLink to={'/reviews/current'} onClick={toggleMenu}>
                  <p><MdOutlineRateReview className="dropdown-icon" /> Manage Reviews</p>
                </NavLink>
              </div>
              <div className="profile-dropdown-logout-div">
                <p onClick={logout}><CiLogout className="dropdown-icon" /> Log Out</p>
              </div>
            </>
          ) : (
            <>
              <div className="open-modal-menu-item">
                <OpenModalMenuItem
                  itemText="Log In"
                  onItemClick={closeMenu}
                  modalComponent={<LoginFormModal />}
                />
                <OpenModalMenuItem
                  itemText="Sign Up"
                  onItemClick={closeMenu}
                  modalComponent={<SignupFormModal />}
                />
              </div>
            </>
          )}
        </ul>
      )}
    </>
  );

}
export default ProfileButton;
