import React from 'react';
import '../style/components/Host.scss';

const Host = (props) => {
  return (
    <div className="host">
      <div className="host__name">{props.hostName}</div>
      <div className="host__picture">
        <img src={props.hostPicture} alt="Visuel de l'hôte" />
      </div>
    </div>
  );
};
export default Host;
