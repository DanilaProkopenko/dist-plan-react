import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import '../../css/about-planet.css'

const Planet = () => {
  const [planet, setPlanet] = useState({
    name: "",
    long_discription_1: "",
    long_discription_2: "",
    long_discription_3: "",
    long_discription_4: ""
  });

  const { id } = useParams();

  useEffect(() => {
    async function loadPlanet() {
      const result = await axios.get(`http://localhost:4000/api/${id}`);
      setPlanet(result.data[0]);
      console.log("Стейт планеты ", result.data)
    }
    loadPlanet()
  }, [id]);

  return (
    <div className="content">
      <div className="wrapper">
        <div className="main-content">
          <div className="container">
            <div className="heading">
              <div className="text">
                {planet.name}
              </div>
            </div>

            <div className="planet-cart">
              <div className="information">
                <div className="planeta">
                  <img src="img/planets_image/" alt="" />
                </div>
                <div className="bottom_text">
                  <p>{planet.long_discription_1}</p>
                  <p>{planet.long_discription_2}</p>
                </div>


                <div className="bottom_planet_text">
                  <p>{planet.long_discription_3}</p>
                  <p>{planet.long_discription_4}</p>

                </div>

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

                <div className="characteristic">
                  <p>Цена за одного человека: 20000 рублей</p>
                  <p>Максимальное число людей в номере: 6 человек</p>
                  <p>Минимальный возраст: 16 лет</p>
                </div>

                <div className="button-for-cart-planet">
                  <div className="text-for-button">
                    <Link to={`/planet/registration/${planet.id}`}>
                      Отправиться
                    </Link>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>
      </div>
    </div>


  );
};

export default Planet;