import React from 'react';
import { Link } from 'react-router-dom';

import './Home.sass'

import imgArrow from '../../img/path.png'
import imgRaqueta from '../../img/group-10.jpg'

const Home = () => {
    return (
        <div id="home">
            <div id="first">
                <div id="white-line"></div>
                <h1>Las mejores raquetas para jugar <span>Tennis</span></h1><br />
                <Link className="button" to="about">ACERCA DE NOSOTROS <img src={imgArrow} alt="arrow" id="arrow-button"/></Link>
            </div>
            <div id="second">
                <h2>Raquetas.Accesorios.<br/>Pelotas</h2>
                <div id="description">
                    <p>Conoce nuestras raquetas y aprende a jugar Tennis como un profesional</p>
                    <Link className="button" to="history">HISTORIA <img src={imgArrow} alt="arrow" id="arrow-button"/></Link>
                </div>
            </div>
            <div id="third">
                <div id="carrousel">
                    <h3>Nuestras <span>Raquetas</span></h3>
                    <p>Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional</p>
                </div>
                <div id="raquetas-slider">
                    <div class="raqueta">
                        <img src={imgRaqueta} alt="Raqueta 1"/>
                    </div>
                    <div class="raqueta">
                        <img src={imgRaqueta} alt="Raqueta 1"/>
                    </div>
                    <div class="raqueta">
                        <img src={imgRaqueta} alt="Raqueta 1"/>
                    </div>      
                    <div class="raqueta">
                        <img src={imgRaqueta} alt="Raqueta 1"/>
                    </div>                    
                </div>
            </div>
            <div id="fourth"></div>
        </div>
    );
};

export default Home;