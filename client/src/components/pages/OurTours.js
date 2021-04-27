import React, { useState, useEffect } from "react";
import '../../css/our-tours.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Heading from "./ourTours/Heading";

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
    <div className="content">
      <div className="wrapper">
        <div className="main-content">
          <div className="container">
            <Heading />

            {planets.map((planet, index) => (
              <div className="planet-cart">
                <div className="information">
                  <div className="under-text">
                    {planet.name}

                  </div>
                  <div className="bottom-text">
                    {planet.shot_discription}
                  </div>

                  <div className="button-for-cart-planet">
                    <div className="text-for-button">
                      <Link to={`/planet/${planet.id}`}>
                        Отправиться
                    </Link>
                    </div>
                  </div>
                </div>
                <div className="planeta">
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
