import React from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import data from '../lodging.json';

const Lodging = () => {
  const params = useParams();
  const getLodging = data.find(({ id }) => id === params.id);
  const slidePictures = getLodging.pictures;

  return (
    <main className="lodging-container">
      <Carrousel slides={slidePictures} />
    </main>
  );
};

export default Lodging;
