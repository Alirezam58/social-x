import React from 'react';
import './Features.css';
import phoneFeatures from '../../assets/phone-features.png';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import Feature from './Feature';
import { featureList } from './data.js';

const Features = () => {
  return (
    <section id="features">
      <div className="container features">
        <div className="u-title">
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2>امکانات اصلی</h2>
          <p className="u-text-small u-text-dark">
            در این بخش اصلی ترین امکانات اپلیکیشن کاربردی را نمایش می دهد که
            توسط آن کاربر می تواند از تمام امکانات استفاده نماید
          </p>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-left">
            <img src={phoneFeatures} alt="phone" />
          </div>
          <div className="features-right" data-aos="fade-right">
            {featureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
