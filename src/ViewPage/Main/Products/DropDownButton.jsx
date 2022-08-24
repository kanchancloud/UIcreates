import React from 'react';
import "./DropDownButton.css"
import Contant from "./Contant";

const DropDownButton = () => {
    return (
        <div className="Selected_Button_Wrapper">
            <select className="Selected_Button">
                <option>Sort by:Featured</option>
                <option>car 2</option>
                <option>car 3</option>
                <option>car 4</option>
            </select>
        </div>
    );
};

export default DropDownButton;