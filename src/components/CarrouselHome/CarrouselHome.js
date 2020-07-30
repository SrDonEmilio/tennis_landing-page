import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import "./CarrouselHome.sass";

import imgBackground from "../../img/ball-color-court-1405355.jpg";

const CarrouselHome = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="carrousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={imgBackground} alt="Background Carrousel" />
          <Carousel.Caption>
            <h3>
              Nuestras <span>Raquetas</span>
            </h3>
            <p>
              Conoce nuestras raquetas y aprende a jugar Tennis cómo un
              profesional
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={imgBackground} alt="Background Carrousel" />
          <Carousel.Caption>
            <h3>
              Nuestras <span>Raquetas</span>
            </h3>
            <p>
              Conoce nuestras raquetas y aprende a jugar Tennis cómo un
              profesional
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={imgBackground} alt="Background Carrousel" />
          <Carousel.Caption>
            <h3>
              Nuestras <span>Raquetas</span>
            </h3>
            <p>
              Conoce nuestras raquetas y aprende a jugar Tennis cómo un
              profesional
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={imgBackground} alt="Background Carrousel" />
          <Carousel.Caption>
            <h3>
              Nuestras <span>Raquetas</span>
            </h3>
            <p>
              Conoce nuestras raquetas y aprende a jugar Tennis cómo un
              profesional
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarrouselHome;
