import React from 'react';
import AboutBanner from '../components/AboutBanner';
import Collapse from '../components/Collapse';
import aboutServices from '../../src/aboutServices.json';

const About = () => {
  const services = aboutServices;
  return (
    <div>
      <AboutBanner />
      <main>
        <div className="dropdown-container">
          {services.map((services) => (
            <div className="dropdown-unity" key={services.id}>
              <Collapse
                title={services.aboutTitleServices}
                txt={services.aboutTextServices}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default About;
