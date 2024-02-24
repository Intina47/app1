// path: pages/afrobeats-menu.js
import React from 'react';
import MembershipForm from '../components/menu/menuComponent';
import { Footer, Navbar } from '../components';
import '../styles/globals.css';

const menu = () => (
    <div className=" overflow-hidden">
        <Navbar />
        <div className="flex justify-center items-center h-20 bg-opacity-50">
            <h1 className="text-4xl font-bold text-white">AfroBeats Menu</h1>
        </div>
        <MembershipForm />
        <Footer />
    </div>
    );

export default menu;