import React, { useState, useEffect } from "react";
import '../../css/our-tours.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

const OurTours = () => {
  const [planets, setPlanet] = useState([]);

  useEffect(() => {
    async function loadPlanets() {
      const result = await axios.get("http://localhost:4000/api/get");
      setPlanet(result.data);
      console.log("Стейт planet", result.data)
    }
    loadPlanets()
  }, []);


  return (
    <div class="content">
      <div class="wrapper">
        <div class="main-content">
          <div class="container">
            <div class="headings">
              <div class="text">
                Наши туры
                        </div>
            </div>

            {planets.map((planet, index) => (
              <div class="planet-cart">
                <div class="information">
                  <div class="under-text">
                    {planet.name}
                  </div>
                  <div class="bottom-text">
                    {planet.shot_discription}
                  </div>

                  <div class="button-for-cart-planet">
                    <div class="text-for-button">
                      {/* Но вот этот линк не работает */}
                      <Link to={`/planet/${planet.id}`}>
                        Отправиться
                    </Link>
                      {/* <a href="/>">Отправиться</a> */}
                    </div>
                  </div>
                </div>
                <div class="planeta">
                  {/* <img src="img/planets_image/${planet.img}.png" alt="" />
                   */}
                  <img src="../../img/planets_image/mars.png" alt="" />

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default OurTours;
