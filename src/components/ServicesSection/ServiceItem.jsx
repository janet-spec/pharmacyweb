import React from 'react';
import './ServiceSection.css';

const ServiceItem = ({ title, description, isActive }) => {
  return (
    <div className={`service-item ${isActive ? 'active' : ''}`}>
      <h3 className="service-title">{title}</h3>
      {isActive && <p className="service-description">{description}</p>}
    </div>
  );
};

export default ServiceItem;