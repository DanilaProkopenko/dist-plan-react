import React from "react";
import '../../css/header-footer.css'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="header">
        <div className="header__container">
          <Link className="header__logo" exact="true" to="/">
            Свет далеких планет
         </Link>

          <div className="header__menu menu">
            <div className="menu__icon">
              <span></span>
            </div>
            <div className="menu__body">
              <ul className="menu__list">
                <li>
                  <NavLink activeClassName="menu__link" exact to="/OurTours">
                    Туры
               </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="menu__link" exact to="/">
                    Контакты
               </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="menu__link" exact to="/">
                    Отзывы
               </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="menu__link" exact to="/">
                    +7-911-167-56-89
               </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
};

export default Navbar;
