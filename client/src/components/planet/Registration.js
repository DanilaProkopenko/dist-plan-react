import React, { useState, useEffect } from "react";
import '../../css/our-tours.css'
import axios from 'axios'
import '../../css/registrationcopy.css'
import {Link, useParams} from 'react-router-dom'

const Registration = () => {
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
    <div class="content">
        <div class="wrapper">

            <div class="main-content">
                <div class="heading">
                    <div class="container">
                        <div class="text">
                            Заказ
                        </div>
                    </div>
                </div>

                <div class="planet-cart">
                    <div class="container">
                        <div class="under-text">
                            {planet.name}
                        </div>
                        <div class="planeta">
                            <img src="/img/planets_image/<?= $planet['planet_image'] ?>.png" alt=""/>
                        </div>
                        <form action="">
                            <div class="input">
                                <input type="text" placeholder="Имя"/>
                                <input type="text" placeholder="Фамилия"/>
                                <input type="text" placeholder="Количество людей"/>

                                <div class="radio">
                                        <div class="button">1</div>
                                        <div class="button">2</div>
                                        <div class="button">3</div>
                                        <div class="button">4</div>
                                </div>

                                <input type="text" placeholder="Номер телефона"/>
                            </div>

                            <label class="checkbox">
                                <input class="checkbox-login01" type="checkbox"/>
                                <span class="style-login01"></span>
                                <span class="text-login01">Согласен на
                                    обработку и предоставления своих данных</span>
                            </label>
                            <div class="bottom_text">
                                <p>При заказе вы оставляете нам свои данные, мы с вами свяжемся, проведем обследования,
                                    необходимые для путешествия на планету `{planet.name}`, и после заполним все необходимые
                                    документы.
                                </p>
                            </div>
                            <div class="button-for-cart-planet">
                                <div class="text-for-button">
                                    Заказать
                                </div>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </div>
    </div>
    
  );
};


export default Registration;
