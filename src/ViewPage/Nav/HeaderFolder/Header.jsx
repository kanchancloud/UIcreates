import React from 'react';
import "./Header.css";
import {FaSearch} from "react-icons/fa";
import MainPages from "./MainPages";


const Header = () => {
    return (
        <>
            <div className="container Header_Wrap">
                <div className="Image_Wrap">
                    <img src="image (12).png" alt={"img"} className="Logo"/>
                </div>

                <div className="search-container">
                    <form>
                        <input type="text" placeholder="Search.." name="search"/>
                        <button type="submit"><FaSearch/></button>
                    </form>
                </div>
                <div>
                    <MainPages/>
                </div>
            </div>

        </>
    );
};

export default Header;