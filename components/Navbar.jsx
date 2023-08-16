'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { navlink,boldnavlinks,boldnavlink, navlinks, menuIcon, closeIcon } from '../constants';
import Drawer from './Drawer';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);
  const toggleDrawer = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar sticky bg-black">
      <a href="/">
        <img src="/afrobeats-logo2.png" alt="AFRO BEATS" className="w-[140px] h-[50px] object-contain" />
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-white">
        {navlinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? 'text-white' : 'text-dimred'} ${index === navlinks.length - 1 ? 'mr-10' : 'mr-10'} underline-on-hover`}
            onClick={nav.onClick ? nav.onClick : () => setActive(nav.title)}
          >
            <Link href={nav.url}>{nav.title}</Link>
          </li>
))}

        <li>
          <Link href={boldnavlinks[0].url}>
            <div className="bg-secondary-green rounded-md py-2 px-4 mx-4 text-black font-bold cursor-pointer">
              {boldnavlinks[0].title}
            </div>
          </Link>
        </li>
        <li>
          <Link href={boldnavlinks[1].url}>
            <div className="bg-secondary-green rounded-md py-2 px-4 mx-4 text-black font-bold cursor-pointer">
              {boldnavlinks[1].title}
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
        boldnavlink={boldnavlink}
        navlink={navlink}
        active={active}
        setActive={setActive}
      />
    </nav>
  );
};

export default Navbar;
