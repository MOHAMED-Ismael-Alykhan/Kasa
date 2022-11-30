import React, { useState } from 'react';
import ArrowLeft from '../images/vectorLeft.png';
import ArrowRight from '../images/vectorRight.png';
import '../style/components/Carrousel.scss';

const Carrousel = ({ slides }) => {
  // On va définir l'index du 1er slide à 0
  const [current, setCurrent] = useState(0);
  // length est égal à la longueur du nombre de slides.
  const length = slides.length;

  const previousSlide = () => {
    // Dans le cas où on fait un précédent sur le 1er slide on passe au dernier slide
    // Sinon dans les autres cas , on revient au slide précédent.
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    // Dans le cas où on fait un suivant sur le dernier slide on passe au 1er slide
    // Sinon dans les autres cas , on passe au slide suivant.
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    // Condition si le nombre de slides est supérieur à 1, alors on affiche les flèches "précédent" et "suivant".
    <section className="carrousel-container">
      {length > 1 && (
        <img
          src={ArrowLeft}
          alt="flèche gauche"
          onClick={previousSlide}
          className="ArrowLeft"
        />
      )}
      {length > 1 && (
        <img
          src={ArrowRight}
          alt="flèche droite"
          onClick={nextSlide}
          className="ArrowRight"
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
