import "./NavPage.css";
import {FaPhoneAlt} from "react-icons/fa";
import {FaLock} from "react-icons/fa";
import {FaUserFriends} from "react-icons/fa";
import Header from "./HeaderFolder/Header";

function HeaderPage() {
    return (
        <div className="container">
            <div className=" Top_Nav_icon">
                <div className="Phone_Icon">
                    <FaPhoneAlt/>
                    <p>Contact</p>
                    <p>+9999823205</p>
                </div>
                <div className="auto_wrap">
                    <div className="Login_Icon_Wrap">
                        <FaLock/>
                        <p>Login in</p>
                    </div>
                    <div className="Sign_Icon_Wrap">
                        <FaUserFriends/>
                        <p>Sign up</p>
                    </div>
                </div>
            </div>
            <div className="Header_Wrapper">
                <Header/>
            </div>
        </div>
    );
}

export default HeaderPage;