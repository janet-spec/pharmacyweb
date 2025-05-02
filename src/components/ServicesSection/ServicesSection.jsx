import React from 'react';
import './ServiceSection.css';
import ServiceItem from './ServiceItem';

const services = [
  {
    id: 1,
    title: 'Operational Optimization',
    description: 'Streamline your pharmacy operations for maximum efficiency',
    isActive: true
  },
  {
    id: 2,
    title: 'Financial Management',
    description: 'Take control of your practice finances with our comprehensive solutions',
    isActive: false
  },
  {
    id: 3,
    title: 'Patient Scheduling',
    description: 'Simplify appointment booking and reduce no-shows',
    isActive: false
  },
  {
    id: 4,
    title: 'Compliance Support',
    description: 'Stay updated with healthcare regulations and requirements',
    isActive: false
  },
  {
    id: 5,
    title: 'Staff Training',
    description: "Enhance your team's skills and productivity",
    isActive: false
  },
  {
    id: 6,
    title: 'Technology Integration',
    description: 'Implement modern solutions to modernize your practice',
    isActive: false
  }
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Professional Practice Management Services for Enhanced Efficiency</h2>
        </div>
        
        <div className="services-list">
          {services.map(service => (
            <ServiceItem 
              key={service.id}
              title={service.title}
              description={service.description}
              isActive={service.isActive}
            />
          ))}
        </div>
        
        <div className="services-footer">
          <a href="#learn-more" className="services-link">
            Learn more <span className="arrow">›</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;