import React from "react";
import {Link} from 'react-router-dom';

const Button = () => {
  return (
    <div className="button-for-cart-planet">
      <div className="text-for-button">
        <Link to="#" className="text-for-button">Заказать</Link>
      </div>
    </div>
  );
};


export default Button;
