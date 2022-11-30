import React, { useState } from 'react';
import ArrowUp from '../images/vectorUp.png';
import ArrowDown from '../images/vectorDown.png';

const Collapse = ({ txt, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div>
      <button
        className="dropdown-button"
        type="button"
        onClick={() => setIsOpen(false)}
      >
        <span>{title}</span>
        <img src={ArrowUp} alt="flèche vers le haut" />
      </button>
      <p className="dropdown-text">{txt}</p>
    </div>
  ) : (
    <div>
      <button
        className="dropdown-button"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <span>{title}</span>
        <img src={ArrowDown} alt="flèche vers le bas" />
      </button>
    </div>
  );
};
export default Collapse;
