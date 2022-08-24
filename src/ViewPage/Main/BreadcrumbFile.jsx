import "./BreadCrumbfile.css"
import SideBar from "./AsideBar/sideBar";
import PriceList from "./Products/PriceList";

function BreadcrumbFile() {
    return (
        <div className="breadcrumb_Wrappers">
            <div>
                <ul className="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">product</a></li>
                </ul>
            </div>
            <div className="sideBar_Wrapperss">
                <SideBar/>
                <div className="PriceBar">
                    <PriceList/>
                </div>
            </div>

        </div>
    );
}

export default BreadcrumbFile;