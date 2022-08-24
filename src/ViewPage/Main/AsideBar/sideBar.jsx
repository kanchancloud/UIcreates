import React from 'react';
import {CheckBoxArray} from "./CheckBoxJson";
import "./SideBar.css";

const SideBar = () => {
    return (
        <div className="sideBar_Wrap">
            <p className="sideBarTitle">Tyre Brand</p>
            {CheckBoxArray.map((v, i) => {
                return (
                    <div className="form-check">
                        <input className="check_input form-check-input"
                               type="checkbox"
                               value=""
                               id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {v.Brands}
                        </label>
                    </div>
                )
            })}
            <div className="Price_wrap">
                <p className="sideBarTitle">Price</p>
                <div className="Price">
                    <span>Under रु 1,000</span>
                    <span>रु1,000 - रु5,000</span>
                    <span>रु5,000 - रु10,000</span>
                    <span>Over रु10,000</span>
                </div>
            </div>
            <div>
                <p className="sideBarTitle">Deals</p>
                <div className="form-check">
                    <input className="check_input form-check-input"
                           type="checkbox"
                           value=""
                           id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                       Today Deals
                    </label>
                </div>
            </div>
            <div>
                <p className="sideBarTitle">Pay on Delivery</p>
                <div className="form-check">
                    <input className="check_input form-check-input"
                           type="checkbox"
                           value=""
                           id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Eligible for pay on Delivery
                    </label>
                </div>
            </div>
            <div className="Price_wrap">
                <p className="sideBarTitle">Discount</p>
                <div className="Price">
                    <span>10% of or more</span>
                    <span>25% of or more</span>
                    <span>35% of or more</span>
                    <span>50% of or more</span>
                    <span>60% of or more</span>
                </div>
            </div>
            <div>
                <p className="sideBarTitle">Availability</p>
                <div className="form-check">
                    <input className="check_input form-check-input"
                           type="checkbox"
                           value=""
                           id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Include out of stock
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SideBar;