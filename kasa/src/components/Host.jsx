import React from 'react';
import '../style/components/Host.scss';

const Host = ({ hostName, hostPicture }) => {
  return (
    <div className="host">
      <div className="host__name">{hostName}</div>
      <div className="host__picture">
        <img src={hostPicture} alt="Visuel de l'hôte" />
      </div>
    </div>
  );
};
export default Host;
