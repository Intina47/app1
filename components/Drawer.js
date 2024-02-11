import React from 'react';
import Link from 'next/link';

const Drawer = ({ toggle, boldnavlink,navlink, active, setActive }) => (
  <div className={`${
      !toggle ? 'hidden' : 'flex'
    } p-6 bg-secondary-drawer absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
    style={{ zIndex: 100 }}
  >
    {/* Drawer content */}
    <ul className="list-none flex justify-end mb-4 items-start flex-1 flex-col">
      {
  navlink.map((nav, index) => (
    <li
      key={nav.id}
      className={`font-poppins font-normal cursor-pointer text-[16px] ${
        active === nav.title ? 'text-white' : 'text-black'
      } ${index === navlink.length - 1 ? 'mb-8' : 'mb-4'} underline-on-hover`}
      onClick={nav.onClick ? nav.onClick : () => setActive(nav.title)}
    >
      <Link href={nav.url}>{nav.title}</Link>

    </li>
  ))
}
      <li>
        <Link href={boldnavlink[0].url}>
          <div className="bg-black rounded-full py-3 px-4 mx-0 mb-4 pl-6 -mt-4px text-white font-bold cursor-pointer w-full">
            {boldnavlink[0].title}
          </div>
        </Link>
      </li>
    </ul>
  </div>
);
export default Drawer;
