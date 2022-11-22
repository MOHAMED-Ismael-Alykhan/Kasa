import React from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import Tag from '../components/Tag';
import Host from '../components/Host';
import Rating from '../components/Rating';
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
      <div className="host-container">
        <Host
          hostName={getLodging.host.name}
          hostPicture={getLodging.host.picture}
        />
      </div>
      <div className="rating-container">
        <Rating rating={getLodging.rating} />
      </div>
    </main>
  );
};

export default Lodging;
