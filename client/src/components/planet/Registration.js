import React, { useState, useEffect } from "react";
import '../../css/our-tours.css'
import axios from 'axios'
import '../../css/registrationcopy.css'
import {useParams} from 'react-router-dom'
import Heading from "./registration/Heading";
import Button from "./registration/Button";
import Checkbox from "./registration/Checkbox";
import InputName from './registration/InputName';

const Registration = () => {
    const [planet, setPlanet] = useState({
        name: "",
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
               <Heading />

                <div className="planet-cart">
                    <div className="container">
                        <div className="under-text">
                            {planet.name}
                        </div>
                        <div className="planeta">
                            <img src="/img/planets_image/<?= $planet['planet_image'] ?>.png" alt=""/>
                        </div>
                        <form action="">
                            <InputName />

                            <Checkbox />
                            <div className="bottom_text">
                                <p>При заказе вы оставляете нам свои данные, мы с вами свяжемся, проведем обследования,
                                    необходимые для путешествия на планету `{planet.name}`, и после заполним все необходимые
                                    документы.
                                </p>
                            </div>
                            <Button/>
                        </form>

                    </div>

                </div>

            </div>
        </div>
    </div>
    
  );
};


export default Registration;
