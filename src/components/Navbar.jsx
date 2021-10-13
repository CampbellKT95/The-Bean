import React, {useState} from "react";
import { FaCoffee } from "react-icons/fa";
import {FaBars} from "react-icons/fa";
import "../index.css";

const Navbar = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    const btnClick = () => {
        setShowDropdown(!showDropdown);
    } 


    return <nav className="nav nav-container">
        <FaCoffee className="nav-logo" />
        <h4>Moonbucks</h4>

        {/* for smaller size screens */}
        <FaBars onClick={btnClick} className="nav-hamburger"/>
        <div className={`${showDropdown ? "show-menu" : "hide-menu"}`}>
        <ul className="hamburger-container">
            <li className="hamburger-menu-item">
                <a href="#" alt="menu">Menu</a>
            </li>
            <li className="hamburger-menu-item">
                <a href="#" alt="menu" >Location</a>
            </li>
            <li className="hamburger-menu-item">
                <a href="#" alt="menu" >Contact</a>
            </li>
            <li className="hamburger-menu-item">
                <a href="#" alt="menu" >About us</a>
            </li>
        </ul>
        </div>

        {/* for larger screens */}
        <ul className="list-container">
            <li className="nav-item">
                <a href="#" alt="menu">Menu</a>
            </li>
            <li className="nav-item">
                <a href="#" alt="menu" >Location</a>
            </li>
            <li className="nav-item">
                <a href="#" alt="menu" >Contact</a>
            </li>
            <li className="nav-item">
                <a href="#" alt="menu" >About us</a>
            </li>
        </ul>
   
    </nav>
}

export default Navbar;