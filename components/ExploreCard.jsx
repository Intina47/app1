// explore our Event

'use client';

import React, {useEffect, useRef} from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({id,imgUrl,title,day,url,index,active,handleClick}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the card becomes visible in the viewport, make it the active card
        if (entry.isIntersecting) {
          handleClick(id);
        }
      },
      {
        // Adjust the rootMargin to control when the observer's callback is triggered
        rootMargin: '0px 0px -50% 0px',
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [id, handleClick]);

  return (
    <motion.div
      ref={cardRef}
      variants={fadeIn('right','spring',index * 0.5,0.75)}
      className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]'
: 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] 
h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)} id="ourNights"
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px]
    text-[18px] text-white absolute z-0
    lg:bottom-20 lg:rotate[-90deg] lg:origin-[0,0]"
        >
          {title}
        </h3>
  ) : (
    <div id="ourNights" className="absolute bottom-0 p-8
    justify-start w-full flex-col bg-[rgba(0,0,0,0.5)]
    rounded-b-[24px]"
    >
      <Link href={`/reservation/${url}`}>
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px]
      glassmorphism mb-[16px]`}
        >
          <img
            src="arrow.svg"
            alt="MAKE A RESERVATION"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </Link>
      <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
        MAKE A BOOTH RESERVATION
      </p>
      <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
        {title}
      </h2>
      <span className="text-sm text-white">
        {day}
      </span>
    </div>
  )}
    </motion.div>
);
};

export default ExploreCard;
