import React from "react";
import '../../css/main-page.css'

import Heading from './home/Heading';
import ButtonForHeading from './home/ButtonForHeading';
import InfornationBlock from './home/InfornationBlock'
import ButtonForInformation from "./home/ButtonForInformation";
import Slider from "./home/Slider";
const Home = () => {
  
  return (
    <div className="content">
        <div className="wrapper">
            <div className="black-back">
                <div className="container">
                    <div className="main-content">
                      <Heading />
                      <ButtonForHeading />
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <InfornationBlock />
                    <Slider />
                    <ButtonForInformation />
                </div>
            </div>
        </div>
    </div>
  );
};


export default Home;
