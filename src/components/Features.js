import React from 'react';
import { FeaturesList } from './FeaturesList.js'
import FeaturesImage from '../../images/FeaturesImage.png'
import '../styles/Features.css';

const Features = () => {
  return (
    <div className="features-hero" id="section1">
      <div className="col">
        <img className="features-img" src={FeaturesImage}></img>
      </div>
      <div className="col">
        <div className="text-wrapper">
          <h2 className="features-header">App Features</h2>
          <ul className="features-list">
            {FeaturesList.map((item, index) => {
              return (
                <li className="features-list-item"key={index}>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Features;