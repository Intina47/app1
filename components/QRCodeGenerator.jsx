import React from 'react';
import QRCode from 'qrcode.react';
import { socials } from '../constants';

const QRCodeGenerator = () => {
  const link = 'https://afrobeatsdundee.vercel.app/membership';

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-xl font-bold mb-4">
          Scan QR Code to Access Membership Page
        </h1>
        <div className="mx-auto">
          <QRCode
            value={link}
            size={400}
            bgColor="#ffffff"
            fgColor="#000000"
            level="L"
            includeMargin={false}
            renderAs="svg"
          />
        </div>
        <div className="flex justify-center items-center mt-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={social.url}
                alt={social.name}
                className="w-8 h-8 mx-2"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
);
};

export default QRCodeGenerator;
