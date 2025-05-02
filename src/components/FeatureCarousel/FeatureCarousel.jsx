import React, { useState } from 'react';
import './FeatureCarousel.css';
import FeatureCard from './FeatureCard';

const features = [
  {
    id: 1,
    title: 'Operational Inefficiencies',
    description: 'Disjointed processes and workflows',
    color: 'yellow',
    icon: '/images/operational-icon.svg'
  },
  {
    id: 2,
    title: 'Staff Overload',
    description: 'Increased administrative burden on your team',
    color: 'teal',
    icon: '/images/staff-icon.svg'
  },
  {
    id: 3,
    title: 'Financial Management Issues',
    description: 'Difficulties in tracking and managing finances',
    color: 'pink',
    icon: '/images/finanancial-icon.svg'
  },
  {
    id: 4,
    title: 'Patient Scheduling Problems',
    description: 'Inefficient appointment scheduling and follow-ups',
    color: 'blue',
    icon: '/images/patient-icon.svg'
  }
];

const FeatureCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 4;
  
  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? features.length - itemsPerView : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex(prev => (prev === features.length - itemsPerView ? 0 : prev + 1));
  };
  
  const visibleFeatures = [];
  for (let i = 0; i < itemsPerView; i++) {
    const index = (activeIndex + i) % features.length;
    visibleFeatures.push(features[index]);
  }

  return (
    <section className="feature-carousel-section">
      <div className="container">
        <div className="feature-carousel">
          <button className="carousel-control prev" onClick={handlePrev}>
            &#8249;
          </button>
          
          <div className="feature-cards-container">
            {visibleFeatures.map(feature => (
              <FeatureCard 
                key={feature.id}
                title={feature.title}
                description={feature.description}
                color={feature.color}
                icon={feature.icon}
              />
            ))}
          </div>
          
          <button className="carousel-control next" onClick={handleNext}>
            &#8250;
          </button>
        </div>
        
        <div className="carousel-indicators">
          {features.map((_, index) => (
            <button 
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;