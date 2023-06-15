'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles';
import { footerVariants} from '../utils/motion';
import { socials } from '../constants';

const Footer = () => {
  const [placeholder, setPlaceholder] = useState('Your Feedback Keeps Us Grooving');
  const [formData, setFormData] = useState({
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleFocus = () => {
    setPlaceholder('Please remember to add your email');
  };

  const handleBlur = () => {
    setPlaceholder('Your Feedback Keeps Us Grooving');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // check if message is empty
    if (formData.message.trim() === '') {
      setPlaceholder('Please enter your feedback');
      return;
    }
    try {
      const response = await fetch('/api/feedbackapi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // reset the form
        setFormData({
          message: '',
        });
        setPlaceholder('Thank you for your feedback');
      } else {
        console.log('something went wrong', response.statusText);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2" id="contact-section">
            <label htmlFor="message" className="text-white text-[18px] font-bold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="1"
              className="flex bg-transparent border-2 border-primary-green rounded-lg text-white text-[18px] font-bold p-5 resize-auto"
              placeholder={placeholder}
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </form>

          {/* send button with an icon */}
          <div className="flex items-center gap-5">
            <button
              type="submit"
              className="bg-secondary-green flex items-center gap-2 text-primary-black px-5 py-2 rounded-full"
              onClick={handleSubmit}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="font-bold text-[18px]">Send Message</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex gap-4">
            {/* tel */}
            <div className="flex items-center gap-2">
              <p>
                <span className="text-white text-[18px] font-bold">Tel:</span>
              </p>
              <a href="tel:+447944 444 444" title="Give Us A Call">
                <span className="text-white text-[18px] font-bold">01382 782663 |</span>
              </a>
            </div>
            {/* social media icons */}
            <div className="flex items-center gap-2">
              <p>
                <span className="text-white text-[18px] font-bold">Follow Us:</span>
              </p>
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
            </div>
          </div>
          <p className="font-normal text-[14px] text-white opacity-50">
            © 2023 Afro beats. All rights reserved.
            <span className="flex items-center gap-1">
              | Dev:
              <Link href="https://github.com/Intina47" target="_blank">
                <img
                  src="/icons8-github.svg"
                  alt="isaiahNtina"
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </Link>
            </span>
          </p>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-yellow" viewBox="0 0 20 20" fill="yellow">
              <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M10 6a2 2 0 100 4 2 2 0 000-4zm0 1a1 1 0 110 2 1 1 0 010-2z" clipRule="evenodd" />
            </svg>
            <a href="https://goo.gl/maps/A6f372rpyHWAVSNeA">
              <h4 className="text-white text-[18px] font-bold">3 Session Street, DD1 5DN, Dundee</h4>
            </a>
          </div>

        </div>
      </div>

    </motion.footer>
);
};

export default Footer;
