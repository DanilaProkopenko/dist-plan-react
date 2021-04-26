import React from "react";
import '../../css/header-footer.css'
// import { NavLink } from 'react-dom'

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="footer">
                    <div class="left-text">
                        <p>Адрес офиса: Галактика Млечный путь, Солнечная система, планета Земля, материк Евразия,
                    страна Россия, область Московская, город Москва, улица Пушкина 22 строение 15. </p>
                        <p>Номер телефона: +7-911-167-56-89</p>
                        <p>Режим работы: круглосуточно</p>
                        <p>Почта: galactic@putb.com</p>
                    </div>
                    <div class="right-text">
                        <nav>
                            {/* <li><NavLink href="">Партнерам</NavLink></li>
                            <li><NavLink href="">Сотрудничество</NavLink></li>
                            <li><NavLink href="">Реклама</NavLink></li> */}
                        </nav>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
