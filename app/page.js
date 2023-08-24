/* eslint-disable react/button-has-type */

'use client';

import React, { useState, useEffect } from 'react';
import { Footer, Navbar } from '../components';
import { About, Explore, GetStarted, Hero } from '../sections';
import OurMenuPopup from '../components/menuPopup';
import '../styles/styles.css';
import { chevron } from '../constants';

const Page = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = (event) => {
    event.stopPropagation();
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisited');
    if (!hasVisitedBefore) {
      setShowPopup(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <div className="bg-black overflow-hidden">
      <div className="relative z-10 position-sticky">
        <Navbar />
      </div>
      <div className="relative z-0">
        <Hero />
      </div>
      <div className="relative z-0">
        <About />
        <div className="gradient-03 z-10" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
      </div>
      <Footer />
      {/* Floating button when clicked show the menu */}
      <div className="floating-button">
        <button className="menu-float-button" onClick={togglePopup}>
          <img src={chevron.Url} alt={chevron.name} className="menu-icon" />
          <span className="menu-icon">OUR MENU</span>
        </button>
      </div>
      {/* Only show the popup if the showPopup state is true */}
      {showPopup && (
        <div className="popup-overlay">
          <OurMenuPopup onClose={togglePopup} />
        </div>
      )}
    </div>
  );
};

export default Page;
