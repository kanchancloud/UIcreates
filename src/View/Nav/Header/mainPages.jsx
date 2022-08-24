import React from 'react';
import "./MainPages.css";
import { FaCartPlus } from "react-icons/fa";

const MainPages = () => {
    return (
        <div className="DropDown_Wrap">
            <div className="dropdown">
                <p className="dropbtn dropdown-toggle" data-toggle="dropdown">Car Brands</p>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown">
                <p className="dropbtn dropdown-toggle" data-toggle="dropdown">Tyre Brands</p>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown">
                <p className="dropbtn dropdown-toggle" data-toggle="dropdown"> City</p>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="Cart">
                <p className="Cart dropdown-toggles" data-toggle="dropdown">
                    <FaCartPlus className="Cart_Icon"/>Cart</p>
            </div>
        </div>
    );
};

export default MainPages;