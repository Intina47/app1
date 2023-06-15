'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { navlink, navlinks, menuIcon, closeIcon } from '../constants';
import Drawer from './Drawer';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);
  const handleOurNightsClick = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(window.location.search);
    const reservationType = queryParams.get('type');
    if (reservationType === 'Guestlist') {
      window.location.href = '/#ourNights'; // Redirect to the home page
    } else {
      const ourNightsSection = document.getElementById('ourNights');
      if (ourNightsSection) {
        ourNightsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  const toggleDrawer = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar sticky">
      <img src="/afrobeats-logo2.png" alt="AFO BEATS" className="w-[140px] h-[50px] object-contain" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-white">
        {
  navlinks.map((nav, index) => (
    <li
      key={nav.id}
      className={`font-poppins font-normal cursor-pointer text-[16px] ${
        active === nav.title ? 'text-white' : 'text-dimred'
      } ${index === navlinks.length - 1 ? 'mr-10' : 'mr-10'} underline-on-hover`}
      onClick={nav.onClick ? nav.onClick : () => setActive(nav.title)}
    >
      {nav.onClick ? (
        <a
          href={nav.id === 'contact-section' ? '/reservation?type=Guestlist#contact-section' : '/#ourNights'}
          onClick={handleOurNightsClick}
        >
          {nav.title}
        </a>
) : (
  <Link href={nav.url}>{nav.title}</Link>
)}

    </li>
  ))
}
        <li>
          <Link href={navlink[1].url}>
            <div className="bg-secondary-green rounded-md py-2 px-4 mx-4 text-black font-bold cursor-pointer">
              {navlink[1].title}
            </div>
          </Link>
        </li>
      </ul>
      {/* Toggle button */}
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
        navlinks={navlinks}
        navlink={navlink}
        active={active}
        setActive={setActive}
      />
    </nav>
  );
};

export default Navbar;
