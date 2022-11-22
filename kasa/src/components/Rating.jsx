import React from 'react';
import emptyStar from '../images/vectorEmptyStar.png';
import fullStar from '../images/vectorFullStar.png';
import '../style/components/Rating.scss';

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {stars.map((star, index) =>
        rating >= star ? (
          <img
            key={index}
            className="star"
            src={fullStar}
            alt="étoile pleine"
          />
        ) : (
          <img
            key={index}
            className="star"
            src={emptyStar}
            alt="étoile vide "
          />
        )
      )}
    </div>
  );
};

export default Rating;
