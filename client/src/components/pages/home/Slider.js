import React from 'react';

const Slider = () => {
    return (
        <div className="slick-slider">
            <div className="text">Галерея</div>
            <div className="wrapper">
                <div className="slider">
                    <div className="slider__item">
                        <img src="img/Rectangle 2.png" alt="" />
                    </div>
                    <div className="slider__item">
                        <img src="img/Rectangle 2.png" alt="" />
                    </div>
                    <div className="slider__item">
                        <img src="img/Rectangle 3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider