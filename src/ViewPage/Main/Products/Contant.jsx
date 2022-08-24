import React from 'react';
import "./Contant.css";
import MoreInfoDrop from "./MoreInfoDrop";


const Contant = () => {
    return (
        <div className="Contant_wrap">
           <span className="Text">
               Lorem ipsum dolor sit amet,
               consectetur adipiscing elit, sed do eiusmod tempor incididunt
               ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco
           </span>
            <div>
                <MoreInfoDrop/>
            </div>
        </div>
    );
};

export default Contant;