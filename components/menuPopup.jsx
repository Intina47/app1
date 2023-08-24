/* eslint-disable react/button-has-type */
import React, { useRef, useEffect } from 'react';
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
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div ref={popupRef} className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Our Menu</h2>
        {/* Menu image */}
        <img src="/cocktail_menu.png" alt="Menu" className="w-full h-auto mb-4" />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default OurMenuPopup;
