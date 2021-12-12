import "./styles.css";
import React, {useState} from "react";
import Landing from "../landing/Landing";
import List from "../list/List";
import { FaCoffee, FaBars } from "react-icons/fa";
import {navbarData} from "../../data/navbarData";

const Navbar = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    const btnClick = () => {
        setShowDropdown(!showDropdown);
    } 

    const clearDropdown = () => {
        setShowDropdown(false);
    }


    return <>
        <nav className="nav nav-container" >
            <FaCoffee className="nav-logo" />
            <h4>The Bean</h4>

            {/* for smaller size screens */}
            <FaBars onClick={btnClick} className={`${showDropdown ? "nav-hamburger nav-hamburger-clicked" : "nav-hamburger"}`} />


            {/* <FaBars onClick={btnClick} className="nav-hamburger"/> */}
            <div className={`${showDropdown ? "show-menu" : "hide-menu"}`}>
                <ul className="hamburger-container">
                    {navbarData.map((item) => {
                        return (
                            <List id={item.id} name={item.name} sizeClass="hamburger-menu-item"/>
                        )

                    })}
                </ul>
            </div>
            {/* for larger screens */}
            <ul className="list-container">
                {navbarData.map((item) => {
                    return (
                        <List id={item.id} name={item.name} sizeClass="nav-item"/>
                    )

                })}
            </ul>
        </nav>

        <Landing clearDropdown={clearDropdown}/>
    </>
}

export default Navbar;