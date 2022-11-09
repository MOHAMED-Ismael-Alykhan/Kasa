import React from 'react';
import { Link } from 'react-router-dom';
import ErrorLogo from '../images/404.png';

const Error = () => {
  return (
    <main className="error">
      <div className="error-titles">
        <img src={ErrorLogo} alt="Erreur 404" />
        <h1>Oups! La page que vous demandez n'existe pas.</h1>
      </div>
      <div className="error-redirect">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </main>
  );
};

export default Error;
