import React from 'react';
import QRCodeGenerator from '../components/QRCodeGenerator';
import { Navbar } from '../components';

const membershipqrcode = () => (
  <div>
    <Navbar />
    <QRCodeGenerator />
  </div>
  );

export default membershipqrcode;
