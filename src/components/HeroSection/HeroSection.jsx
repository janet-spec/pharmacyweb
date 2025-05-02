import React from "react";
import "./HeroSection.css";
import BookingButton from "../Booking/BookingButton";
import heroImage from "../../assets/hero-image.png";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-image-container">
          <div className="hero-image-container-info">
            <h1 className="hero-title">Pharmacy</h1>
            <p className="hero-description">
              Operational bottlenecks, frequent billing errors, and mismanaged
              schedules can lead to revenue loss and frustrated patients.
            </p>
            
            <div className="hero-cta">
              <button className="booking-button">
                Book Appointment
                <svg
                  className="arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  width={24}
                  height={24}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <img
            src={heroImage}
            alt="Healthcare professional in blue scrubs with a mask"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
