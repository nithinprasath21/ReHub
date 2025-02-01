import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import imag from "../assets/re-img.png";

function Navbar() {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                <a href="/" className="logo d-flex align-items-center">
                    <img src={imag} alt="Logo" className="logo-image" />
                    <h1 className="sitename">Ré</h1>
                </a>

                <nav id="navmenu" className="navmenu">
                <ul>
                        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink></li>
                        <li><NavLink to="/add-project" className={({ isActive }) => (isActive ? 'active' : '')}>Apply Now</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;