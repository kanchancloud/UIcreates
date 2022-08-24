import React from 'react';
import './cardImage.css';
import {FiHeart} from "react-icons/fi";
import {FiShare2} from "react-icons/fi";
import {FaStar} from "react-icons/fa";
import {FiShoppingCart} from "react-icons/fi";
import {FaChargingStation} from "react-icons/fa";
import {FaFileInvoice} from "react-icons/fa";
import {BiVolumeFull} from "react-icons/bi";
import {ImageArray} from "./imageAarry";

const CardImage = (prop) => {
    return (
        <div className={"card-wrapper"}>
            {prop.isCorner ? <div className="Triangle_backGround">
                <div className="circle">
                    <div className="circle1">
                    </div>
                </div>
                <span className="TextSpans">FEATURED<span className="productSpan">PRODUCT</span></span>
            </div> : ""}

            <div className={"left-container"}>
                <div className={"image-wrapper"}>
                    <img src={"image (11).png"}/>
                </div>
                <div className={"icon-wrapper"}>
                    <div className={"icon-box"}>
                        <div className={"icon-container"}>
                            <FaChargingStation className="Icons"/>
                        </div>
                        <div className={"icon-text"}>Fuel Efficient</div>
                    </div>

                    <div className={"icon-box"}>
                        <div className={"icon-container"}>
                            <FaFileInvoice className="Icons"/>
                        </div>
                        <div className={"icon-text"}>Excellent Braking/Grip</div>
                    </div>

                    <div className={"icon-box"}>
                        <div className={"icon-container"}>
                            <BiVolumeFull className="Icons"/>
                        </div>
                        <div className={"icon-text"}>Low Noise</div>
                    </div>

                </div>
            </div>
            <div className={"right-container"}>
                <div className={"upper-section"}>
                    <div className={"card-heading"}>
                        <div>
                            <span className="firstLetter">B</span>
                            <span>ridgestone</span>
                        </div>
                        <div>
                            <FiShare2 className="Share_Icon"/>
                            <FiHeart className="heart_Icon"/>
                        </div>
                    </div>
                    <div className={"card-sub-heading"}>Bridgestone</div>
                    <div className={"model"}>B290</div>
                    <div className={"size"}>
                        <span className={"fraction"}>145/80</span>
                        <span className={"size-series"}>R2</span>
                    </div>
                    <div className={"star-wrapper"}>
                        <div className={"star-box"}>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        <div className={"count"}>(137)</div>
                    </div>
                </div>
                <div className={"mid-section"}>
                    <span>Price</span>
                    <div className={"price-wrapper"}>
                        <span>रु2000</span>
                        <del>रु3,500</del>
                    </div>
                    <div className={"cart-wrapper"}>
                        <span className={"cart-count"}>4</span>
                        <button className={"buy-now-button"}> Buy Now</button>
                        <button className={"add-card-button"}><FiShoppingCart style={{color: "#0f79d7"}}/>
                        </button>
                    </div>
                </div>
                <div className={"lower-section"}>
                    <button>Product Specification</button>
                    <button>Vehicle Compatibility</button>
                </div>
            </div>
        </div>
    );
};

export default CardImage;