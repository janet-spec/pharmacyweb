import React from 'react';
import './Booking.css';
import { useModal } from '../../Context/ModalContext';

const BookingButton = ({ className }) => {
  const { openModal } = useModal();
  
  return (
    <button 
      className={`booking-button ${className || ''}`} 
      onClick={openModal}
    >
      <span>Book Appointment</span>
      <span className="booking-icon">+</span>
    </button>
  );
};

export default BookingButton;