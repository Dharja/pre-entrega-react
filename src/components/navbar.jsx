import React from 'react';
import CartWidget from './cartwidget';
import 'bootstrap/dist/css/bootstrap.css';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">D-Shop</a>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Log In</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Contact Us</a>
            </li>
            <li><CartWidget /></li>
            </ul>
        </nav>
    );
}

export default NavBar;

/* 
const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
            <a href="/" className="brand-logo">D-Shop</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/">Home</a></li>
                <li><a href="/">Log In</a></li>
                <li><a href="/">Contact Us</a></li>
                <li><CartWidget /></li>
            </ul>
            </div>
        </nav>
    );
} */