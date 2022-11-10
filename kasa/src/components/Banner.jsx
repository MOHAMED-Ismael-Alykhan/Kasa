import { useEffect, useState } from 'react';
import React from 'react';
import '../style/components/Banner.scss';

export default function Banner() {
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
    <div className="banner-container">
      <div className="banner-text-container">
        <div className="banner-text">
          Chez vous,
          <br /> partout et ailleurs
        </div>
      </div>
    </div>
  ) : (
    <div className="banner-container">
      <div className="banner-text-container">
        <div className="banner-text">Chez vous, partout et ailleurs</div>
      </div>
    </div>
  );
}
