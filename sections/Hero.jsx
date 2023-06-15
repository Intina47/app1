'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
// import { useEffect, useState } from 'react';
import styles from '../styles';
import { slideIn, staggerContainer,fadeIn } from '../utils/motion';
import { socials } from '../constants';

const Hero = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const locationDetails = {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-yellow" viewBox="0 0 20 20" fill="yellow">
        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M10 6a2 2 0 100 4 2 2 0 000-4zm0 1a1 1 0 110 2 1 1 0 010-2z" clipRule="evenodd" />
      </svg>
    ),
    details: '3 Session Street, DD1 5DN, Dundee',
  };

  // // store open days and times
  // const [openDays, setOpenDays] = useState([]);
  // const [openTimes, setOpenTimes] = useState([]);
  // // get restaurant opening hours for the current day of week
  // useEffect(() => {
  //   const days = ['Tuesday','Thursday','Friday', 'Saturday'];
  //   const today = new Date();
  //   const dayOfWeek = days[today.getDay()];
  //   const openHours = {
  //     Tuesday: ['20:00', '02:30'],
  //     Thursday: ['10:00', '02:30'],
  //     Friday: ['20:00', '02:30'],
  //     Saturday: ['20:00', '02:30'],
  //   };
  //   setOpenDays(days);
  //   setOpenTimes(openHours[dayOfWeek]);
  // }, []);

  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`} id="hero">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex flex-col gap-4">
          {/* BAR . NIGHTCLUB . PRIVATE FUNCTIONS . */}
          <div className="flex flex-col gap-2">
            <h1 className="hero_description text-[18px] font-thin">BAR . NIGHTCLUB . PRIVATE FUNCTIONS</h1>
          </div>
          <a href="https://goo.gl/maps/A6f372rpyHWAVSNeA">
            <div className="flex items-center gap-2 " title="Our Location">
              {locationDetails.icon}
              <h4 className="text-white text-[18px] font-bold loc_underline-on-hover">{locationDetails.details}</h4>
            </div>
          </a>
          {socials.map((social, index) => (
            <Link href={social.link} key={index} title={social.name}>
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            </Link>
          ))}
        </motion.div>

        {/* name */}
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.img
            src="/afrobeats-logo2.png"
            alt="AFRO BEATS"
            className="w-[200px] h-auto object-contain"
          />
        </div>

        <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="relative w-full md:-mt-[20px] -mt-[12px]">
          <div className="absolute w-full h-[300px]  rounded-tl-[140px] z-[0] -top-[30px]" />
          <video
            src="/hero_Vid.mp4"
            alt="hero"
            className="w-full sm:h-[500px] h-[340px] object-cover rounded-tl-[40px] z-10 relative"
            autoPlay
            muted
            loop
            playsInline
            style={{ filter: 'blur(0px)', animationDuration: '5s' }} // Apply CSS styles for blur and animation duration
          />
          <Link href="/reservation?type=Reservation">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-row items-center gap-2">
                  <h1 className="text-white font-bold text-[18px] loc_underline-on-hover">Make a Booth Reservation</h1>
                  <div className="bg-secondary-green rounded-full w-[50px] h-[50px] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

      </motion.div>

      {/* arrow down */}
      <motion.div variants={fadeIn(0.2, 1)} className="flex justify-center items-center mt-[50px]">
        <a href="#about" onClick={handleScrollToAbout}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

