'use client';
import React, { useState } from "react";
import Link from "next/link";
import { navlink, navlinks, menuIcon, closeIcon } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar sticky">
      <img src="/afrobeats-logo2.png" alt="AFO BEATS" className="w-[140px] h-[50px] object-contain" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-white">
      {
  navlinks.map((nav, index) => (
    <li
      key={nav.id}
      className={`font-poppins font-normal cursor-pointer text-[16px] ${
        active === nav.title ? "text-white" : "text-dimred"
      } ${index === navlinks.length - 1 ? "mr-10" : "mr-10"}`}
      onClick={nav.onClick ? nav.onClick : () => setActive(nav.title)}
    >
      {nav.onClick ? (
        <a href="/reservation?type=Guestlist#contact-section">{nav.title}</a>
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
      <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
        <img
          src={toggle ? closeIcon.Url : menuIcon.Url}
          alt="menu"
          className="w-[28px] h-[28px] object-contain text-white mr-10"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navlink.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px]${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navlink.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link href={nav.url}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





























// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);
//   const [active, setActive] = useState('home');
//   return (
//   <motion.nav
//   variant={navVariants}
//   initial="hidden"
//   whileInView="show"
//   className={ `${styles.xPaddings} py-8 relative`}>
//     <div className="absolute w-[-50%] inset-0 gradient-01"/>
//     <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
//       <img
//       src="/afro1.png"
//       alt="Afro Beats Logo"
//       className="w-[100px] h-[50px] object-contain"/>
//       <ul className="list-none cursor-pointer sm:flex hidden justify-end items-center flex-1" onClick={()=>handleClick(id)}>
//         {navlinks.map((nav, index) => (
//           <motion.li
//           key={nav.id}
//           variants={{
//             initial: { scale: 1 },
//             whileHover: { scale: 1.1 }
//           }}
//           className={`cursor-pointer font-poppins font-normal text-[-16px] 
//             ${index === navlinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
//           <a href={`#${nav.id}`}>{nav.title}</a> 
//         </motion.li>        
//         ))}
//       </ul>
//       <div className="sm:hidden flex flex-1 justify-end items-center">
//       <img src={toggle ? closeIcon.Url : menuIcon.Url}
//       alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
//       onClick={() => setToggle(!toggle)}
//       />
//       <div className={`${toggle? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20
//       right-0 mx-4 my-2 min-w-[140px] rounded-x1 sidebar`}
//       >
//          <ul className="list-none flex-col justify-end items-center flex-1">
//         {navlinks.map((nav, index) => (
//           <motion.li
//           key={nav.id}
//           variants={{
//             initial: { scale: 1 },
//             whileHover: { scale: 1.1 }
//           }}
//           initial="initial"
//           whileHover="whileHover"
//           className={`font-poppins font-normal cursor-pointer text-[-16px] 
//             ${index === navlinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
//         >
//           <a href={`#${nav.id}`}>
//             {nav.title}
//             </a>
//         </motion.li>        
//         ))}
//       </ul>
//       </div>
//     </div>
//     </div>
//   </motion.nav>
//   )
// }

// export default Navbar;
