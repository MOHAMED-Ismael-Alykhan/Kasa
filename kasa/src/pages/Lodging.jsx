import React from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import Tag from '../components/Tag';
import data from '../lodging.json';

const Lodging = () => {
  const params = useParams();
  const getLodging = data.find(({ id }) => id === params.id);
  const slidePictures = getLodging.pictures;

  return (
    <main className="lodging-container">
      <Carrousel slides={slidePictures} />
      <div className="title-container">
        <h1>{getLodging.title}</h1>
        <h2>{getLodging.location}</h2>
      </div>
      <div className="tags-container">
        {getLodging.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </main>
  );
};

export default Lodging;
