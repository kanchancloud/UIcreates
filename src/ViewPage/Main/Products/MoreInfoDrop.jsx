import React from 'react';
import "./MoreInfoDrop.css";
import CardPage from "./CardPage";

const MoreInfoDrop = () => {
    return (
        <div className="MoveInfo_Selected_Button_Wrapper">
            <select className="MoveInfo_Selected_Button">
                <option>See More</option>
                <option>Link 2</option>
                <option>Link 3</option>
                <option>Link 4</option>
            </select>
        </div>
    );
};

export default MoreInfoDrop;