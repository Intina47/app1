//this is our reservations page
import React from 'react';
import '../styles/globals.css';

import { Footer, Navbar } from '../components';
import Booking from '../components/booking';
const Reservations = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <Booking />
    </div>
    <Footer />
  </div>
);

export default Reservations;