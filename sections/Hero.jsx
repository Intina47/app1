'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import React, { useRef } from 'react';
import styles from '../styles';
import { slideIn, staggerContainer } from '../utils/motion';
import { socials,promotions } from '../constants';
import '../styles/styles.css';
import Card from '../components/promo_card';

const Hero = () => {
  const flag = 0; // Set the value of the flag to 0 or 1
  const locationDetails = {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-yellow" viewBox="0 0 20 20" fill="yellow">
        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M10 6a2 2 0 100 4 2 2 0 000-4zm0 1a1 1 0 110 2 1 1 0 010-2z" clipRule="evenodd" />
      </svg>
    ),
    details: '3 Session Street, DD1 5DN, Dundee',
  };

  const imagePaths = [
    '/resbh1.png',
    '/resbh2.png',
  ];
  const imageRef = useRef(null);

  return (
    <section
      className={`${styles.yPaddings} sm:pl-16 pl-6 bg-black ${styles.heroSection}`}
      id="hero"
      ref={imageRef}
    >
      {imagePaths.map((path, index) => (
        <div
          key={index}
          className="carouselImage relative"
          style={{ backgroundImage: `url(${path})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
    ))}
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
            <h1 className="hero_description text-[18px] font-thin p-2 rounded">BAR . NIGHTCLUB . PRIVATE FUNCTIONS</h1>
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
                className="w-[24px] h-[24px] object-contain cursor-pointer font-bold text-xl transform hover:scale-105 transition duration-300 relative overflow-hidden"
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

        {flag === 0 ? (
          // Rendering the promo cards here
          <div className="flex flex-col z-10">
            <h2 className="text-left text-lg text-white font-bold mb-2 bg-black bg-opacity-50 rounded-tl-[20px] rounded-tr-[20px] p-2 mb-0">Our Hottest Deals & Upcoming Events</h2>
            <div className="flex overflow-x-scroll gap-2">
              {promotions.map((promo, index) => (
                <Card
                  key={index}
                  image={promo.image}
                  title={promo.title}
                  description={promo.description}
                  link={promo.link}
                  buttonText={promo.buttonText}
                />
              ))}
            </div>
          </div>

        ) : (
          // Render the video here
          <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="relative w-full md:-mt-[20px] -mt-[12px]">
            <div className="absolute w-full h-[300px] rounded-tl-[140px] z-[0] -top-[30px]" />
            <video
              src="/hero_Vid.mp4"
              alt="hero"
              className="w-full sm:h-[500px] h-[340px] object-cover rounded-tl-[40px] rounded-bl-[40px] z-10 relative"
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
        )}
      </motion.div>
    </section>
);
};

export default Hero;

