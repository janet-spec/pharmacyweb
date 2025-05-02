import React from 'react';
import './FeatureCarousel.css';

const FeatureCard = ({ title, description, color, icon }) => {
  return (
    <div className={`feature-card ${color}`}>
      <div className="feature-content">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
      <div className="feature-icon">
        <img src={icon} alt={title} />
      </div>
    </div>
  );
};

export default FeatureCard;