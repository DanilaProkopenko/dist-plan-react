import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import '../../css/about-planet.css'

const Planet = () => {
  const [planet, setPlanet] = useState({
    name: "",
    long_discription_1: "",
    long_discription_4: "",
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
    // <div className="container py-4">
    //   <Link className="btn btn-primary" to="/">
    //     back to Home
    //   </Link>
    //   <h1 className="display-4">User Id: {id}</h1>
    //   <hr />
    //   <ul className="list-group w-50">
    //     <li className="list-group-item">movieName: {user.movieName}</li>
    //     <li className="list-group-item">movieReview: {user.movieReview}</li>
    //   </ul>
    // </div>

    <div class="content">
      <div class="wrapper">
        <div class="main-content">
          <div class="container">
            <div class="heading">
              <div class="text">
                {planet.name}
              </div>
            </div>

            <div class="planet-cart">
              <div class="information">
                <div class="planeta">
                  <img src="img/planets_image/" alt="" />
                </div>
                <div class="bottom_text">
                  <p>{planet.long_discription_1}</p>
                  <p>{planet.long_discription_2}</p>
                </div>


                <div class="bottom_planet_text">
                  <p>{planet.long_discription_3}</p>
                  <p>{planet.long_discription_4}</p>

                </div>

                <div class="slick-slider">
                  <div class="text">Галерея</div>
                  <div class="wrapper">
                    <div class="slider">
                      <div class="slider__item">
                        <img src="img/Rectangle 2.png" alt="" />
                      </div>
                      <div class="slider__item">
                        <img src="img/Rectangle 2.png" alt="" />
                      </div>
                      <div class="slider__item">
                        <img src="img/Rectangle 3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="characteristic">
                  <p>Цена за одного человека: 20000 рублей</p>
                  <p>Максимальное число людей в номере: 6 человек</p>
                  <p>Минимальный возраст: 16 лет</p>
                </div>

                <a href="/registrationcopy.php?id=<?=$planet['id']?>">
                  <div class="button-for-cart-planet">
                    <div class="text-for-button">
                      Отправиться
                                    </div>
                  </div>
                </a>
              </div>


            </div>

          </div>
        </div>
      </div>
    </div>


  );
};

export default Planet;