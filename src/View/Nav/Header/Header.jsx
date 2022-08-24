import React from 'react';
import "./Header.css";
import {FaSearch} from "react-icons/fa";
import MainPages from "./mainPages";

const Header = () => {
    return (
        <div className="container Header_Wrap">
            <div className="Image_Wrap">
                <img src="image (12).png" className="Logo"/>
            </div>

            <div className="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit"><FaSearch/></button>
                </form>
            </div>
            <div>
                <MainPages/>
            </div>
        </div>
    );
};

export default Header;