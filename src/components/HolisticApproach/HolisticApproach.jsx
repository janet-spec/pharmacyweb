import React from 'react';
import './HolisticApproach.css';
import BookingButton from '../Booking/BookingButton';

const services = [
  'Operational Optimization',
  'Financial Management',
  'Patient Scheduling',
  'Compliance Support',
  'Staff Training',
  'Technology Integration'
];

const HolisticApproach = () => {
  return (
    <section className="holistic-section">
      <div className="container">
        <div className="holistic-grid">
          <div className="holistic-content">
            <h2 className="holistic-title">End-to-End Practice Management with a Holistic Approach</h2>
            <p className="holistic-description">
              Our comprehensive practice management solutions are designed to transform your pharmacy operations from end to end. We take a holistic approach to address the unique challenges faced by modern pharmacies.
            </p>
            
            <div className="service-checklist">
              {services.map((service, index) => (
                <div key={index} className="checklist-item">
                  <div className="check-icon">✓</div>
                  <span>{service}</span>
                </div>
              ))}
            </div>
            
            <div className="holistic-cta">
              <BookingButton />
            </div>
          </div>
          
          <div className="holistic-image-container">
            <img src="https://plus.unsplash.com/premium_photo-1661397081309-c98ead2f9e66?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Healthcare professional" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolisticApproach;