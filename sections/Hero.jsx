'use client';

import {motion} from 'framer-motion';

import React from 'react';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant,fadeIn } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)}
        className={(styles.heroHeading)} >
          AFRO
        </motion.h1>
        <motion.div variants={textVariant(1.2)}
        className="flex flex-row justify-center items-center">
          <h1 className={(styles.heroHeading)}>BEATS</h1>
        </motion.div>
      </div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
      className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0]
        -top-[30px]'/>
          <img
            src="/afro3.png"
            alt="hero"
            className='w-full sm:h-[500px] h-[350px]
            object-cover rounded-tl-[140px] z-10 relative'
          />
          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px]
            -mt-[50px] pr-[40px]  relative z-10">
              {/* create a certcular object with text book a both and an link arrow */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-row items-center gap-2">
                <h1 className="text-white font-bold text-[18px]">Make a Reservation</h1>
                  <div className="bg-secondary-green rounded-full w-[50px] h-[50px] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    </div>        
                    </div>
                    </div>
            </div>
          </a>
      </motion.div>
      </motion.div>
      {/* arrow down */}
      <motion.div variants={fadeIn(0.2, 1)}
      className="flex justify-center items-center mt-[50px]">
        <a href="#about">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
  </section>
);

export default Hero;
