import React from 'react';
import '../styles/Benefits.css';
import { BenefitsList } from './BenefitsList.js';
import Benefits_Check from '../../images/Benefits_Check.png';

const Benefits = () => {
  return (
    <div className="benefits-hero">
      <h2 className="benefits-hero-head">What Pet Check Does For You</h2>
        <dl className="benefits-list">
          {BenefitsList.map((item, index) => {
            return (
              <div className="benefits-list-item" key="index">
                <dt className="benefits-list-title"> <img className="benefits-check-img"src={Benefits_Check}></img>{item.title}</dt>
                <dd className="benefits-list-descrip">{item.description}</dd>
              </div>
            )
          })}
        </dl>
    </div>
  );
}

export default Benefits;