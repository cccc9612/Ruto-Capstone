import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaBars, FaRegUserCircle } from 'react-icons/fa';
import { thunkLogout } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { NavLink } from "react-router-dom";

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.session.user);
  const ulRef = useRef();

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
    dispatch(thunkLogout());
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
                  <li>Favorites</li>
                </NavLink>
                <NavLink to={`trips`} onClick={toggleMenu}>
                  <li>Trips</li>
                </NavLink>
              </div>
              <div className="profile-dropdown-user-div">
                <NavLink to={`/cars/new`} onClick={toggleMenu}>
                  <li>Add a car</li>
                </NavLink>
              </div>
              <div className="profile-dropdown-manage-div">
                <NavLink to={'/cars/current'} onClick={toggleMenu}>
                  <li>Manage Cars</li>
                </NavLink>
                <NavLink to={'/reviews/manage'} onClick={toggleMenu}>
                  <li>Manage Reviews</li>
                </NavLink>
              </div>
              <div className="profile-dropdown-logout-div">
                <li onClick={logout}>Log Out</li>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      )}
    </>
  );

}
export default ProfileButton;
