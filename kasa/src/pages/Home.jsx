import React from 'react';
import HomeBanner from '../components/HomeBanner';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import data from '../lodging.json';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <div className="cards-container">
        {data.map((lodging, id) => (
          <div className="card-lodging" key={id}>
            <Link to={`/lodging/${lodging.id}`}>
              <Card cover={lodging.cover} title={lodging.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
