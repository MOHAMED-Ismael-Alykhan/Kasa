import React, { useState } from 'react';
import left from '../images/vectorLeft.png';
import right from '../images/vectorRight.png';
import '../style/components/Carrousel.scss';

const Carrousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <section className="carrousel-container">
      {length > 1 && (
        <img
          src={left}
          alt="flèche gauche"
          onClick={previousSlide}
          className="leftArrow"
        />
      )}
      {length > 1 && (
        <img
          src={right}
          alt="flèche droite"
          onClick={nextSlide}
          className="rightArrow"
        />
      )}
      {slides.map((slide, index) => (
        <div key={index} className="slideshow">
          {index === current && (
            <img src={slide} alt="Visuel du logement en location" />
          )}
          {index === current && (
            <span className="slideshow__number">
              {current + 1}/{length}
            </span>
          )}
        </div>
      ))}
    </section>
  );
};

export default Carrousel;
