import React from 'react';
import "./PriceList.css"
import DropDownButton from "./DropDownButton";
import Contant from "./Contant";
import CardPage from "./CardPage";


const PriceList = () => {
    return (
        <>
            <div className="Main_Wrap">
                <div className="PriceList">
                    <span>145 80 R12 Car Tyre Price List</span>
                </div>
                <div>
                    <DropDownButton/>
                </div>
            </div>
            <div className="Contant_page_Wrap">
                <Contant/>
                <div className="Cards_wrapper">
                    <CardPage/>
                </div>
            </div>
        </>
    );
};

export default PriceList;