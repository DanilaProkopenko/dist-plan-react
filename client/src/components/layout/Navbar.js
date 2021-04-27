import React from "react";
import '../../css/header-footer.css'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div class="header">
        <div class="header__container">
          <Link className="header__logo" href="/">
            Свет далеких планет
         </Link>

          <div class="header__menu menu">
            <div class="menu__icon">
              <span></span>
            </div>
            <div class="menu__body">
              <ul class="menu__list">
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
