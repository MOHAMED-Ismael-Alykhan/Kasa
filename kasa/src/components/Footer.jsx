import React from 'react';
import logoWhite from '../images/logoFooter.png';

const Footer = () => {
  return (
    <footer>
      <img src={logoWhite} alt="Logo de Kasa" />
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
};

export default Footer;
