//path: /components/EntryQrCodeGenerator.jsx
import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import Countdown from 'react-countdown';
import { socials } from '../constants';

const QRCodeGenerator = ({ uuid }) => {
        // just a variable to hold the uuid to remove the warning for now
        const userid = uuid;
        console.log('generated uuid %s ', userid);
        const link = 'https://afrobeatsdundee.co.uk/membership';
        const [copied, setCopied] = useState(false);
        const [countdownTime, setCountdownTime] = useState(() => {
          // Retrieve the remaining time from localStorage or set a default value
          const storedTime = localStorage.getItem('countdownTime');
          return storedTime ? Math.max(0, parseInt(storedTime, 10) - Date.now()) : 1000 * 60 * 24 * 60;
        });
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
                navigator.clipboard.writeText(el.value);
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

        useEffect(() => {
          const intervalId = setInterval(() => {
            setCountdownTime((prevTime) => {
              if (prevTime > 0) {
                const newTime = prevTime - 1000;
                localStorage.setItem('countdownTime', newTime + Date.now());
                return newTime;
              }
              clearInterval(intervalId);
              return prevTime;
            });
          }, 1000);

          return () => clearInterval(intervalId); // Cleanup interval on component unmount
        }, []);

        return (
          <div className="flex justify-center items-center overflow-x-auto mt-4">
            <div className="text-center">
              {/* company name */}
              <h1 className="text-2xl font-bold mb-1">
                AFROBEATS DUNDEE
              </h1>
              <h2 className="text-xl mb-4">
                ENTRY QR CODE
              </h2>
              <div className="mx-auto">
                <QRCode
                  value={link}
                  size={350}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="L"
                  includeMargin={false}
                  renderAs="svg"
                />
              </div>
              {/* count down timer */}
              <div className="bg-secondary-green flex justify-center items-center mt-4">
                <p className="text-6xl font-extrabold m-4"><Countdown date={Date.now() + countdownTime} /></p>
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
