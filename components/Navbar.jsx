'use client';
import { motion } from "framer-motion";
import styles from '../styles';
import {navVariants} from '../utils/motion';
import {navlinks, menuIcon,closeIcon} from '../constants';
import React, { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('home');
  return (
  <motion.nav
  variant={navVariants}
  initial="hidden"
  whileInView="show"
  className={ `${styles.xPaddings} py-8 relative`}>
    <div className="absolute w-[-50%] inset-0 gradient-01"/>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
      src="/afro1.png"
      alt="Afro Beats Logo"
      className="w-[100px] h-[50px] object-contain"/>
      <ul className="list-none cursor-pointer sm:flex hidden justify-end items-center flex-1">
        {navlinks.map((nav, index) => (
          <motion.li
          key={nav.id}
          variants={{
            initial: { scale: 1 },
            whileHover: { scale: 1.1 }
          }}
          className={`cursor-pointer font-poppins font-normal text-[-16px] 
            ${index === navlinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
        >

          <a href={`#${nav.id}`}>{nav.title}</a>
          
        </motion.li>        
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
      <img src={toggle ? closeIcon.Url : menuIcon.Url}
      alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
      onClick={() => setToggle(!toggle)}
      />
      <div className={`${toggle? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20
      right-0 mx-4 my-2 min-w-[140px] rounded-x1 sidebar`}
      >
         <ul className="list-none flex-col justify-end items-center flex-1">
        {navlinks.map((nav, index) => (
          <motion.li
          key={nav.id}
          variants={{
            initial: { scale: 1 },
            whileHover: { scale: 1.1 }
          }}
          initial="initial"
          whileHover="whileHover"
          className={`font-poppins font-normal cursor-pointer text-[-16px] 
            ${index === navlinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
        >
          <a href={`#${nav.id}`}>
            {nav.title}
            </a>
        </motion.li>        
        ))}
      </ul>
      </div>
    </div>
    </div>
  </motion.nav>
  )
}

export default Navbar;
