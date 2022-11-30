import React from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import Tag from '../components/Tag';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import Error from './Error';
import data from '../lodging.json';

const Lodging = () => {
  try {
    const params = useParams();
    const getLodging = data.find(({ id }) => id === params.id);
    const slidePictures = getLodging.pictures;
    const equipments = getLodging.equipments;
    const materials = equipments.map((item, index) => (
      <li key={index} className="equipList">
        {item}
      </li>
    ));

    return (
      <main className="lodging-container">
        <Carrousel slides={slidePictures} />
        <section className="lodging-container__texts">
          <div className="titleTags-hostRating">
            <div className="title-tags-container">
              <div className="title-container">
                <h1>{getLodging.title}</h1>
                <h2>{getLodging.location}</h2>
              </div>

              <div className="tags-container">
                {getLodging.tags.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </div>
            </div>
            <div className="host-rating-container">
              <div className="host-container">
                <Host
                  hostName={getLodging.host.name}
                  hostPicture={getLodging.host.picture}
                />
              </div>
              <div className="rating-container">
                <Rating rating={getLodging.rating} />
              </div>
            </div>
          </div>
          <div className="collapse-container">
            <div className=" collapse-description">
              <Collapse title="Description" txt={getLodging.description} />
            </div>
            <div className="collapse-equipments">
              <Collapse title="Équipements" txt={materials} />
            </div>
          </div>
        </section>
      </main>
    );
  } catch (err) {
    return <Error />;
  }
};

export default Lodging;
