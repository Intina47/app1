//path: /components/EntryQrCodeGenerator.jsx
import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import format from 'date-fns/format';
import { socials } from '../constants';

// time format hh:mm:ss:ms
const timeFormat = 'HH:mm:ss';

// count down timer
const countDown = (time) => {
        const timeLeft = format(time, timeFormat);
        return timeLeft;
};

const QRCodeGenerator = ({ uuid }) => {
        // just a variable to hold the uuid to remove the warning for now
        console.log(uuid, 'Generated QR Code');
        const link = 'https://afrobeatsdundee.co.uk/membership';
        const [copied, setCopied] = useState(false);
        const [countdownTime, setCountdownTime] = useState(0);

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
          const storedTimestamp = localStorage.getItem('qrCodeTimestamp');

          if (storedTimestamp) {
            const timeDifference = Date.now() - storedTimestamp;
            const initialTime = 24 * 24 * 24 * 60 * 60 - timeDifference; // 24 hours in milliseconds
            const remainingTime = Math.max(0, initialTime);
            setCountdownTime(remainingTime);
          } else {
            const initialTime = 24 * 24 * 24 * 60 * 60; // 24 hours in milliseconds
            setCountdownTime(initialTime);
            localStorage.setItem('qrCodeTimestamp', Date.now());
          }
        }, []);

        useEffect(() => {
                localStorage.setItem('qrCodeTimestamp', Date.now());
        }, []);

        useEffect(() => {
                const intervalId = setInterval(() => {
                        setCountdownTime((prevTime) => prevTime - 1000);
                }, 1000);
                return () => clearInterval(intervalId);
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
                <p className="text-6xl font-extrabold m-4">{countDown(countdownTime)}</p>
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
