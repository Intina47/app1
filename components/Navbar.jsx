/* eslint-disable react/button-has-type */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { navlink,boldnavlinks,boldnavlink, menuIcon, closeIcon } from '../constants';
import Drawer from './Drawer';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  const toggleDrawer = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [toggle]);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar sticky bg-primary-black-[100]">
      <a href="/">
        <img src="/afrobeats-logo2.png" alt="AFRO BEATS" className="w-[140px] h-[50px] object-contain" />
      </a>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-white">
        <li>
          <Link href={boldnavlinks[0].url}>
            <div className="bg-gradient-to-r rounded-md py-2 px-4 mx-4 text-black font-bold cursor-pointer font-bold text-xl transform hover:scale-105 transition duration-300 relative overflow-hidden">
              {boldnavlinks[0].title}
            </div>
          </Link>
        </li>
        <li>
          <Link href={boldnavlinks[1].url}>
            <div className="bg-gradient-to-r rounded-md py-2 px-4 mx-4 text-black font-bold cursor-pointer font-bold text-xl transform hover:scale-105 transition duration-300 relative overflow-hidden">
              {boldnavlinks[1].title}
            </div>
          </Link>
        </li>
        <li>
          {/* Toggle button for the drawer */}
          <img
            src={menuIcon.Url}
            alt="menu"
            className="w-[28px] h-[28px] object-contain text-white mr-10 z-40 cursor-pointer font-bold text-xl transform hover:scale-105 transition duration-300 relative overflow-hidden"
            onClick={toggleDrawer}
            style={{ fill: 'white' }}
          />
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
        <img
          src={toggle ? closeIcon.Url : menuIcon.Url}
          alt="menu"
          className="w-[28px] h-[28px] object-contain text-white mr-10 z-40"
          onClick={toggleDrawer}
          style={{ fill: 'white' }}
        />
      </div>

      {/* Drawer */}
      <Drawer
        toggle={toggle}
        closeIcon={closeIcon}
        menuIcon={menuIcon}
        boldnavlink={boldnavlink}
        navlink={navlink}
        active={active}
        setActive={setActive}
        toggleDrawer={toggleDrawer}
      />
    </nav>
  );
};

export default Navbar;
