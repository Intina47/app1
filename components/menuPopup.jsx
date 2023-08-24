/* eslint-disable react/button-has-type */
import React, { useRef, useEffect } from 'react';
import { menu,closeblackIcon } from '../constants';
import '../styles/styles.css';

const OurMenuPopup = ({ onClose }) => {
  const popupRef = useRef(null);

  // Add event listener to close popup on click outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div ref={popupRef} className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-lg w-full overflow-y-hidden mx-4 md:mx-auto md:max-w-md">
      <h2 className="text-xl font-semibold mb-4">Our Menu</h2>
      <img src={menu[0].url} alt="Menu" className="w-full h-auto mb-4 rounded-lg" />
      <button className="close-button bg-secondary-green rounded-full p-1 flex items-center space-x-2 p-2 flex items-center" onClick={onClose}>
        <img src={closeblackIcon.Url} alt="close" className="w-6 h-6 object-contain text-black" />
        <span className="text-black">Close</span>
      </button>
    </div>
  );
};

export default OurMenuPopup;
