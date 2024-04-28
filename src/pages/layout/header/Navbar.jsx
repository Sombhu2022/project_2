import { Link, NavLink } from "react-router-dom";
import logo from "../../../media/logo.png";

import { AiFillHome } from "react-icons/ai";
import { MdInfo } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import { BiLogInCircle } from "react-icons/bi";

import "./navbar.scss";
const Navbar = () => {
    return (
        <header className="navbar-container">
            <img src={logo} className="logo" />

            <nav className="navLink_container">
                <NavLink className="link" to="/">
                    {" "}
                    <AiFillHome /> Home
                </NavLink>
                <NavLink className="link" to="/about">
                    <MdInfo /> About
                </NavLink>
                <NavLink className="link" to="/product">
                    <IoBagHandle /> product
                </NavLink>

                <Link to={"/login"} className="loginBtn">
                    <BiLogInCircle />
                    Login
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
