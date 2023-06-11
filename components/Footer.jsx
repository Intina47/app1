'use client';
import {motion} from 'framer-motion';
import Link from "next/link";
import styles from '../styles';
import { footerVariants} from '../utils/motion';
import { socials } from '../constants';
const Footer = () => (
  <motion.footer
  variants={footerVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.paddings} py-8 relative`}>
    <div className="footer-gradient"/>
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">

        <div className="flex flex-col gap-2" id="contact-section">
          <label htmlFor="message" className="text-white text-[18px] font-bold" placeholder="Message"></label>
          <textarea name="message" id="message" cols="30" rows="1" className="bg-transparent border-2 border-primary-green rounded-lg text-white text-[18px] font-bold p-5 resize-none" placeholder="Your Feedback Keeps Us Grooving"></textarea>
        </div>
 
        {/* send button with an icon */}
        <div className="flex items-center gap-5">
          <button className="bg-secondary-green flex items-center gap-2 text-primary-black px-5 py-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span className="font-bold text-[18px]">Send Message</span>
          </button>
          </div>
      </div>
      </div>
          <div className="flex flex-col">
            <div className="mb-[50px] h-[2px] bg-white opacity-10"/>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-yellow" viewBox="0 0 20 20" fill="yellow">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 6a2 2 0 100 4 2 2 0 000-4zm0 1a1 1 0 110 2 1 1 0 010-2z" clipRule="evenodd" />
                </svg>
                <h4 className="text-white text-[18px] font-bold">3 Session Street, DD1 5DN, Dundee</h4>
              </div>
                <p className="font-normal text-[14px] text-white opacity-50">
                  © 2023 Afro beats. All rights reserved.
                </p>
                <div className='flex gap-4'>
                  {/* tel */}
                  <div className="flex items-center gap-2">
                    <p>
                      <span className="text-white text-[18px] font-bold">Tel:</span>
                    </p>
                    <a href="tel:+447944 444 444" title="Give Us A Call">
                      <span className="text-white text-[18px] font-bold">07748727273 |</span>
                    </a>
                  </div>
                  {socials.map((social, index) => (
                    <Link href={social.link} key={index} title={social.name}>
                      <img
                      key={social.name}
                      src={social.url}
                      alt={social.name}
                      className="w-[24px] h-[24px] object-contain curson-pointer"
                      /> 
                      </Link>              
                  ))}
                </div>
                
            </div>
          </div>
      
  </motion.footer>
);

export default Footer;
