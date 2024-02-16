import React from 'react';
import Link from 'next/link';

const Drawer = ({ toggle, closeIcon, boldnavlink, navlink, active, setActive, toggleDrawer }) => (
  <div 
    className={`fixed top-0 right-0 bottom-0 left-0 bg-black z-50 transition-transform duration-200 ease-in-out ${toggle ? 'flex' : 'hidden'}`}
    style={{ zIndex: 100 }}
  >
    {/* Close button */}
    <div className="absolute top-4 right-4">
      <img
        src={closeIcon.Url}
        alt="close"
        className="w-[28px] h-[28px] object-contain text-red cursor-pointer"
        onClick={toggleDrawer}
        style={{ fill: 'white' }}
      />
    </div>

    {/* Drawer content */}
    <ul className="list-none flex justify-start mb-4 items-start flex-1 flex-col pl-20">
      {
        navlink.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-bold cursor-pointer text-[20px] ${
              active === nav.title ? 'text-white' : 'text-gray-300 hover:text-white'
            } ${index === navlink.length - 1 ? 'mb-8' : 'mb-4'} underline-on-hover`}
            onClick={nav.onClick ? nav.onClick : () => setActive(nav.title)}
          >
            <span className="mr-2 text-green-500 ">{String(index + 1).padStart(2, '0')}.</span>
            <Link href={nav.url}>{nav.title}</Link>
          </li>
        ))
      }
      <li>
        <Link href={boldnavlink[0].url}>
          <div className="bg-black rounded-full py-2 px-4 mx-0 mb-4 pl-6 -mt-4px text-white font-bold cursor-pointer w-full text-[24px] border-2 border-white animate-pulse hover:text-green-500 ">
            {boldnavlink[0].title}
          </div>
        </Link>
      </li>
    </ul>
  </div>
);

export default Drawer;