import { useEffect, useState } from 'react';
import React from 'react';
import '../style/components/HomeBanner.scss';

const HomeBanner = () => {
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
    <div className="home-banner-container">
      <div className="home-banner-text">
        Chez vous,
        <br /> partout et ailleurs
      </div>
    </div>
  ) : (
    <div className="home-banner-container">
      <div className="home-banner-text">Chez vous, partout et ailleurs</div>
    </div>
  );
};
export default HomeBanner;
