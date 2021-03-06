import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.sass'

import imgLogo from '../../img/fill-2.png'
import imgMenu from '../../img/open-menu.png'

const Header = () => {
    return (
        <div id="header">
            <div id="logo-header">
                <NavLink exact to="/">
                    <img src={imgLogo} alt="Logo"/>
                </NavLink>
            </div>
            <div id="menu-icon"><img src={imgMenu} alt="Menu"/></div>
            <nav id="main-menu">
                <ul>
                    <li>
                        <NavLink exact to="/" >Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about">Acerca de nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/history">Historia</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact">Contacto</NavLink>
                    </li>
                </ul>
            </nav>
            <nav id="language-menu">
                <ul>
                    <li>
                        <NavLink exact to="/">ES</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/en">EN</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;