import React from "react";
import '../../css/main-page.css'

import Heading from './home/Heading';
import ButtonForHeading from './home/ButtonForHeading';
import InfornationBlock from './home/InfornationBlock'
import ButtonForInformation from "./home/ButtonForInformation";
import Slider from "./home/Slider";
const Home = () => {
  
  return (
    <div class="content">
        <div class="wrapper">
            <div class="black-back">
                <div class="container">
                    <div class="main-content">
                      <Heading />
                      <ButtonForHeading />
                    </div>
                </div>
            </div>
            <div class="about">
                <div class="container">
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
