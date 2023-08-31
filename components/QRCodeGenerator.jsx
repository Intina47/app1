import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { socials } from '../constants';

const QRCodeGenerator = () => {
  const link = 'https://afrobeatsdundee.vercel.app/membership';
  const [copied, setCopied] = useState(false);
  const copyToClipboard = (str) => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected = document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center overflow-x-auto mt-4">
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
        {/* share on */}
        <div className="flex justify-center items-center mt-4">
          <p className="text-sm mr-2">Follow Us On</p>
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 mr-2"
            >
              <img src={social.url} alt={social.name} />
            </a>
          ))}
          <button
            type="button"
            onClick={() => copyToClipboard(link)}
            className="bg-secondary-green text-bg-primary-black px-4 py-2 rounded-full"
          >
            {copied ? (
              <span role="img" aria-label="Copied">✅ Link Copied! ✅</span>
            ) : (
              <span role="img" aria-label="Copy">📋 Copy Link 📋</span>
            )}
          </button>
          <br />
        </div>
      </div>
    </div>
);
};

export default QRCodeGenerator;
