import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../media/logo.png";

import { AiFillHome } from "react-icons/ai";
import { MdInfo } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import { BiLogInCircle } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";  // Import hamburger icons

import "./navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/user/userController";

const Navbar = () => {
  const { user, isAuthenticate , isRoleShopOwner} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false); // State for managing hamburger menu

  const toggleMenu = () => {
    console.log("ok");
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-container">
      <img src={logo} className="logo" />

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />} 
      </div>

      <nav className={`navLink_container ${isOpen ? "open" : ""}`}>
        <NavLink className="link" to="/" onClick={toggleMenu}>
          <AiFillHome /> Home
        </NavLink>
        <NavLink className="link" to="/about" onClick={toggleMenu}>
          <MdInfo /> About
        </NavLink>
        <NavLink className="link" to="/product" onClick={toggleMenu}>
          <IoBagHandle /> Shop
        </NavLink>
        {
          isRoleShopOwner?(<NavLink className="link" to="/shop/add" onClick={toggleMenu}>
          <IoBagHandle /> Add Shop
        </NavLink>):""
        }
        
        {isAuthenticate ? (
          <Link onClick={() => {
            dispatch(logoutUser());
            toggleMenu();
          }} className="loginBtn">
            <BiLogInCircle /> Log out
          </Link>
        ) : (
          <Link to="/login" className="loginBtn" onClick={toggleMenu}>
            <BiLogInCircle /> Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
