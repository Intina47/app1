/* eslint-disable no-promise-executor-return */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactUsVariants } from '../utils/motion'; // You can define your motion variants
import FAQ from './FAQ';
import { faqs } from '../constants';

const ContactUs = () => {
  const [nameplaceholder, setNamePlaceholder] = useState('Enter your name');
  const [emailplaceholder, setEmailPlaceholder] = useState('Enter your email');
  const [messageplaceholder, setPlaceholder] = useState('Enter your message');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     // check if name field is empty
      if (formData.name.trim() === '') {
        setNamePlaceholder('Please enter your name');
        return;
      }
      // check if email field is empty
      if (formData.email.trim() === '') {
        setEmailPlaceholder('Please enter your email');
        return;
      }
    // check if message is empty
    if (formData.message.trim() === '') {
      setPlaceholder('Please enter your message');
      return;
    }

    try {
      // Show loading state
    setSending(true);
    setSent(false);
    // Simulate an asynchronous operation (e.g., sending message)
    await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch('/api/feedbackapi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
    // Show sent state
    setSending(false);
    setSent(true);
    // Reset sent state after a few seconds
    setTimeout(() => setSent(false), 5000);

        const data = await response.json();
        console.log(data);
        // reset the form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setSending(false);
        alert('Something Went Wrong Please try again or Email us directly at\nafrobeatsdundee@gmail.com');
        console.log('something went wrong', response.statusText);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <motion.div
        variants={contactUsVariants}
        initial="hidden"
        animate="show"
        className="bg-primary-black p-8 rounded-lg md:w-[50%] md:mr-4"
      >
        <div className="max-w-[400px] mx-auto sm:w-full">
          <h1 className="text-white text-center font-bold text-[24px] mb-4">Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-white font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border-2 border-primary-green rounded-lg text-white px-4 py-2"
                required
                placeholder={nameplaceholder}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-white font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border-2 border-primary-green rounded-lg text-white px-4 py-2"
                required
                placeholder={emailplaceholder}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="text-white font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-transparent border-2 border-primary-green rounded-lg text-white px-4 py-2"
                required
                placeholder={messageplaceholder}
              />
            </div>
            <button
              type="submit"
              className={`bg-secondary-green flex items-center gap-2 text-primary-black px-5 py-2 rounded-full ${sending ? 'cursor-not-allowed' : ''}`}
              onClick={handleSubmit}
              disabled={sending || sent}
            >
              {sending ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
      ) : sent ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )}
              <span className={`font-bold text-[18px] ${sent ? 'text-green-500' : ''}`}>
                {sending ? 'Sending Message...' : sent ? 'Message Sent' : 'Send Message'}
              </span>
            </button>
          </form>
        </div>
      </motion.div>
      <div className="md:w-[50%]">
        <FAQ faqs={faqs} />
      </div>
    </div>
  );
};

export default ContactUs;
