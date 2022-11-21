import React from 'react';
import '../style/components/Card.scss';

const Card = ({ cover, title }) => {
  return (
    <section className="card-lodging">
      <img src={cover} alt="location" />
      <div className="card-lodging__degrade">
        <p className="card-lodging__title">{title}</p>
      </div>
    </section>
  );
};
export default Card;
