import React from 'react';
import Link from 'next/link';

const Drawer = ({ toggle, navlink, active, setActive }) => (
  <div className={`${
      !toggle ? 'hidden' : 'flex'
    } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
    style={{ zIndex: 100 }}
  >
    {/* Drawer content */}
    <ul className="list-none flex justify-end items-start flex-1 flex-col">
      {navlink.map((nav, index) => (
        <li
          key={nav.id}
          className={`font-poppins font-medium cursor-pointer text-[16px]${
              active === nav.title ? 'text-white' : 'text-dimWhite'
            } ${index === navlink.length - 1 ? 'mb-0' : 'mb-4'}`}
          onClick={() => setActive(nav.title)}
        >
          <Link href={nav.url}>{nav.title}</Link>
        </li>
        ))}
    </ul>
  </div>
  );

export default Drawer;
