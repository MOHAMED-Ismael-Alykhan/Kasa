import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import ErrorLogo from '../images/404.png';

const Error = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size < 421 ? (
    <main className="error">
      <div className="error-titles">
        <img src={ErrorLogo} alt="Erreur 404" />
        <h1>
          Oups! La page que
          <br />
          vous demandez n'existe pas.
        </h1>
      </div>
      <div className="error-redirect">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </main>
  ) : (
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
