import React from 'react';
import HomeBanner from '../components/HomeBanner';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import data from '../lodging.json';

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <div className="cards-container">
        {data.map((appart, id) => (
          <div className="card-lodging" key={id}>
            <Link className="link-card-lodging" to={`/lodging/${appart.id}`}>
              <Card cover={appart.cover} title={appart.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
/*
export default function Home() {
  return (
    <div>
      <HomeBanner />
      <div className="cards-container">
        {data.map((appart, id) => (
          <div key={id}>
            <Link to={`/lodging/${appart.id}`}>
              <Card cover={appart.cover} title={appart.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
*/
