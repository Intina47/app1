import React from 'react';
import QRCodeGenerator from '../components/QRCodeGenerator';
import { Navbar } from '../components';
import '../styles/globals.css';

const membershipqrcode = () => (
  <div>
    <Navbar />
    <QRCodeGenerator />
  </div>
  );

export default membershipqrcode;
