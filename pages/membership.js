//this is our reservations page
import React from 'react';
import '../styles/globals.css';

import { Navbar } from '../components';
import MembershipForm from '../components/membership';

const membership = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <MembershipForm />
  </div>
);

export default membership;
