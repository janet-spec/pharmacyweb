import React, { useState } from 'react';
import './Header.css';
import { useModal } from '../../Context/ModalContext';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { openModal } = useModal();

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/images/farhat-altaf-2X1CbJ8kVL0-unsplash.jpg" alt="" />
          <span>JAYKAY</span>
          <sup>TM</sup>
        </div>
        
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item active">
              <a href="#home">Home</a>
            </li>
            <li 
              className={`nav-item dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
              onMouseEnter={() => handleDropdownToggle('services')}
              onMouseLeave={() => handleDropdownToggle(null)}
            >
              <a href="#services">Services <span className="dropdown-arrow">▼</span></a>
              <div className="dropdown-menu">
                <a href="#operational">Operational Optimization</a>
                <a href="#financial">Financial Management</a>
                <a href="#patient">Patient Scheduling</a>
                <a href="#compliance">Compliance Support</a>
                <a href="#staff">Staff Training</a>
                <a href="#technology">Technology Integration</a>
              </div>
            </li>
            <li 
              className={`nav-item dropdown ${activeDropdown === 'specialty' ? 'active' : ''}`}
              onMouseEnter={() => handleDropdownToggle('specialty')}
              onMouseLeave={() => handleDropdownToggle(null)}
            >
              <a href="#specialty">Specialty <span className="dropdown-arrow">▼</span></a>
              <div className="dropdown-menu">
                <a href="#pharmacy">Pharmacy</a>
                <a href="#dental">Dental Practice</a>
                <a href="#medical">Medical Clinic</a>
              </div>
            </li>
            <li className="nav-item">
              <a href="#blog">Blog</a>
            </li>
            <li className="nav-item">
              <a href="#aboutus">About us</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        
        <div className="header-cta">
          <button className="btn-get-in-touch" onClick={openModal}>
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;