/* eslint-disable no-promise-executor-return */

'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles';
import { footerVariants} from '../utils/motion';
import { socials } from '../constants';
import '../styles/styles.css';
import { calculateAge, isUserOldEnough } from '../utils/dateUtils';

const Footer = () => {
  const [Nameplaceholder, setnamePlaceholder] = useState('Enter your full name');
  const [Emailplaceholder, setemailPlaceholder] = useState('Enter your email');
  const [sending, setSending] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [isUnder18, setIsUnder18] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'dob') {
      const age = calculateAge(value);
      setIsUnder18(age < 18);
    }
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isUserOldEnough(formData.dob)) {
      alert('Sorry! You must be 18 years old or older to submit this form.');
      return;
    }
    // check if message is empty
    if (formData.name.trim() === '') {
      setnamePlaceholder('Please enter your name');
      return;
    }
    if (formData.email.trim() === '') {
      setemailPlaceholder('Please enter your email');
      return;
    }

    try {
      setSending(true); // Show loading state
      setSubscribed(false);

      // Simulate an asynchronous operation (e.g., subscribing)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch('/api/mailingList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        setSending(false);
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 5000);
        // reset the form
        setFormData({
          name: '',
          email: '',
          dob: '',
        });
      } else if (response.status === 400) {
        setSending(false);
        const errorData = await response.json();
        if (errorData.error === 'Invalid-email-format'){
          alert('Sorry! You entered an invalid Email');
        }
      } else {
        setSending(false);
        alert('Something Went Wrong Please try again or Email us directly at\nafrobeatsdundee@gmail.com');
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 rounded-lg bg-gray-900">
          <h2 className="text-white text-center font-bold text-3xl">Be Our VIP: Get Exclusive Updates & Offers</h2>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-grow w-full">
              <label htmlFor="name" className="text-white text-[18px] font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder={Nameplaceholder}
              />
            </div>
            <div className="flex-grow w-full">
              <label htmlFor="email" className="text-white text-[18px] font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder={Emailplaceholder}
              />
            </div>
            <div className="flex-grow">
              <label htmlFor="dob" className="text-white text-[18px] font-bold">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                // className="flex bg-transparent border-2 border-primary-green rounded-lg text-white text-[18px] font-bold p-3 md:p-5 w-full md:w-auto"
                onBlur={handleChange}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500${
            isUnder18 ? 'border-red-500' : ''
          }`}
                required
              />
              {isUnder18 && (
              <p className="text-red-500">You must be 18 years old or older</p>
        )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-primary-green via-secondary-yellow to-primary-red flex justify-center items-center gap-2 text-primary-black px-5 py-3 rounded-full font-bold text-xl transform hover:scale-105 transition duration-300 relative overflow-hidden"
          >
            {sending ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="font-bold text-[18px]">Subscribing...</span>
              </>
          ) : subscribed ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold text-[18px]">Subscribed!</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="font-bold text-[18px]">Get Exclusive Deals</span>
            </>
          )}
            <div className="absolute inset-0 transition-all transform -scale-0 bg-gradient-to-radial from-secondary-yellow via-primary-red to-primary-green opacity-0 group-hover:opacity-100" />
          </button>
        </form>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
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
            <br />
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
