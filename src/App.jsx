import React from 'react';
import './App.css';
import { ModalProvider } from './Context/ModalContext';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import FeatureCarousel from './components/FeatureCarousel/FeatureCarousel';
import ServicesSection from './components/ServicesSection/ServicesSection';
import HolisticApproach from './components/HolisticApproach/HolisticApproach';
// import StepGuide from './components/StepGuide/StepGuide';
import BookingModal from './components/Booking/BookingModal';

function App() {
  return (
    <ModalProvider>
      <div className="app">
        <Header />
        
        <main>
          <HeroSection />
          
          <div className="main-content">
            {/* Left section */}
            <div className="left-column">
              <FeatureCarousel />
              <HolisticApproach />
              {/* <StepGuide /> */}
            </div>
            
            {/* Right section */}
            <div className="right-column">
              <ServicesSection />
            </div>
          </div>
        </main>
        
        <BookingModal />
      </div>
    </ModalProvider>
  );
}

export default App;