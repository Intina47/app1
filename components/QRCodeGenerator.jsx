import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const link = 'http://localhost:3000/membership';

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-center text-xl font-bold mb-4">
          Scan QR Code to Access Membership Page
        </h1>
        <QRCode value={link} size={200} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
