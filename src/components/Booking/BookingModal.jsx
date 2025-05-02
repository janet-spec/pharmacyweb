import React, { useState, useEffect } from 'react';
import './Booking.css';
import { useModal } from '../../Context/ModalContext';

const BookingModal = () => {
  const { isOpen, closeModal, successMessage, showSuccess } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    preferredDate: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate submission
      console.log('Form submitted:', formData);
      
      // Show success message
      showSuccess('Thank you! Your request has been received.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        service: '',
        preferredDate: ''
      });
      
      // Auto close after 3 seconds
      setTimeout(() => {
        closeModal();
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={closeModal}>×</button>
        
        <div className="modal-content">
          {successMessage ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>{successMessage}</h3>
              <p>We'll get back to you shortly.</p>
              <button className="btn-close-success" onClick={closeModal}>Close</button>
            </div>
          ) : (
            <>
              <h2 className="modal-title">Book an Appointment</h2>
              <p className="modal-subtitle">Fill out the form below and our team will get back to you.</p>
              
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service of Interest *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={errors.service ? 'error' : ''}
                  >
                    <option value="">Select a service</option>
                    <option value="operational">Operational Optimization</option>
                    <option value="financial">Financial Management</option>
                    <option value="patient">Patient Scheduling</option>
                    <option value="compliance">Compliance Support</option>
                    <option value="staff">Staff Training</option>
                    <option value="technology">Technology Integration</option>
                  </select>
                  {errors.service && <span className="error-text">{errors.service}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="preferredDate">Preferred Date (Optional)</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <button type="submit" className="submit-btn">Submit Request</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;