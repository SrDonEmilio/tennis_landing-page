import React from 'react';

import './Footer.sass'
import { NavLink } from 'react-router-dom';

import imgLinkedin from '../../img/group-23.png'
import imgVimeo from '../../img/group-24.png'
import imgInstagram from '../../img/group-25.png'
import imgTwitter from '../../img/group-22.png'
import imgFacebook from '../../img/group-26.png'
import imgLogo from '../../img/fill-2_2.png'

const Footer = () => {
    return (
        <div id="footer">
            <nav id="footer-menu">
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
            <ul>
                <li>
                    <a className="social-icon" id="linkedin" href="#linkedin"><img src={imgLinkedin} alt="Linkedin icon"/></a>
                    <a className="social-icon" id="vimeo" href="#vimeo"><img src={imgVimeo} alt="Vimeo icon"/></a>
                    <a className="social-icon" id="instagram" href="#instagram"><img src={imgInstagram} alt="Instagram icon"/></a>
                    <a className="social-icon" id="twitter" href="#twitter"><img src={imgTwitter} alt="Twitter icon"/></a>
                    <a className="social-icon" id="facebook" href="#facebook"><img src={imgFacebook} alt="Facebook icon"/></a>
                </li>
            </ul>
            <div id="logo-footer">
                <img src={imgLogo} alt="Logo"/>
            </div>
        </div>
    );
};

export default Footer;