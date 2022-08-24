import React from 'react';
import "./CardPage.css";
import CardImage from "./cardImage";

const CardPage = () => {
    return (
        <div className="Main_Page_card_Wraps">
            <span className="CardText">145 80 R12 Car Tyre Price List</span>
            <div className={"section-1"}>
                {
                    (new Array(8).fill("x")).map((v) => <CardImage isCorner={true} />)
                }
            </div>
        </div>
    );
};

export default CardPage;