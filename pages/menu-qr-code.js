// path: pages/menu-qr-code.js
import React from 'react';
import { Navbar } from '../components';
import QRCode from 'qrcode.react';
import '../styles/globals.css';

const QRCodePage = () => (
    <>
        <div>
            <Navbar />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 sm:px-0 mt-10">
            <h1 className="text-2xl font-bold mb-4 text-center text-black">Scan this QR code to access the AfroBeats Menu</h1>
            <div className="flex justify-center items-center">
                <QRCode value="https://afrobeatsdundee.co.uk/afrobeats-menu" size={400} />
            </div>
            <div className="mt-8 text-center mb-2">
                <p className="text-lg font-semibold">Follow us on social media for latest Updates:</p>
                <p className="mt-2">@afrobeatsdundee on Instagram</p>
                <p>@afrobreatsdundee on Facebook</p>
                <p>@afrobeatsdundee on Snapchat</p>
            </div>
        </div>
    </>
);

export default QRCodePage;


