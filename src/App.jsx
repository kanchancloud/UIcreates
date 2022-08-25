import './App.css';
import React from 'react';
import HeaderPage from "./ViewPage/Nav/HeaderPage";
import BreadcrumbFile from "./ViewPage/Main/BreadcrumbFile";
import CardImage from "./ViewPage/Main/Products/cardImage";
import Questions from "./ViewPage/Main/Questions";
import Footer from "./ViewPage/Main/Footer";

function App() {
    return (
        <div className="container App">
            <HeaderPage/>
            <div className="BreadCrumb">
                <BreadcrumbFile/>
            </div>
            <div className="SecondPage">
                {
                    (new Array(6).fill("x")).map((v) => <CardImage isCorner={false}/>)
                }
            </div>
            <div className="SecondPage">
                {
                    (new Array(6).fill("x")).map((v) => <CardImage isCorner={false}/>)
                }
            </div>
            <div className={"third_page"}>
                <Questions/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
