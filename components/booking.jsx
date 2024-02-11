/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-promise-executor-return */

'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FAQ from './FAQ';
import { faqs } from '../constants';
import { bookingVariants } from '../utils/motion';

const booking = () => {
  const [sending, setSending] = useState(false);
  const [booked, setbooked] = useState(false);
  const [placeholder, setPlaceholder] = useState('');
  // const [maxGuests, setMaxGuests] = useState(999);
  const router = useRouter();
  useEffect(() => {
    if (router.asPath.includes('#Contactus')) {
      document.getElementById('Contactus').scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    date: '',
    time: '',
    guests: '',
    specialRequest: '',
    reservationType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'reservationType' && value === 'GuestList') {
      setPlaceholder('– no limits here! 😉');
      // setMaxGuests(5);
    } else if (name === 'reservationType' && value === 'Booth') {
      setPlaceholder('');
      // setMaxGuests(300);
    }
    if (name === 'guests' && Number(value) > 30) {
      setPlaceholder('Reduce the number of Guest Please!');
    }
    if (name === 'guests' && Number(value) < 1){
      setPlaceholder('You can add up to 3 people on the guestlist');
    }
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSending(true); // Show loading state
      setbooked(false);

      // Simulate an asynchronous operation (e.g., subscribing)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200){
        const data = await response.json();
        console.log(data);
        // reset the form
        setFormData({
          name: '',
          email: '',
          phonenumber: '',
          date: '',
          time: '',
          guests: '',
          specialRequest: '',
          reservationType: '',
      });
      setSending(false); // Hide loading state
      setbooked(true); // Show subscribed state
      // Reset subscribed state after a few seconds
      setTimeout(() => setbooked(false), 5000);
      alert('Your reservation has been submitted successfully');
    } else if (response.status === 442) {
      alert('Please ensure you fill all the fields');
      throw new Error(`${response}`);
    } else {
      setSending(false);
      alert('Something Went Wrong Please try again or Email us directly at\nafrobeatsdundee@gmail.com');
      throw new Error(`Something Went Wrong ${response}`);
    }
  } catch (error){
    console.log('Error:', error);
  }
};

  return (
    <><div>
      <h1 className="text-white text-center font-bold text-[24px] mb-0">AFRO BEATS DUNDEE</h1>
      {/* open days */}
      <h2 className="hero_description text-center font-bold text-[18px] mb-0">OPEN DAYS</h2>
      <h3 className="text-white text-center font-bold text-[18px] mb-0">TUESDAY, FRIDAY & SATURDAY</h3>
      {/* open hours */}
      <h2 className="hero_description text-center font-bold text-[18px] mb-0">OPEN HOURS</h2>
      <h3 className="text-white text-center font-bold text-[18px] mb-7">20:00 - 2:30</h3>
    </div>

      <div className="flex flex-col md:flex-row">
        <motion.div
          variants={bookingVariants}
          initial="hidden"
          animate="show"
          className="bg-primary-black p-8 rounded-lg md:w-[50%] md:mr-0"
        >
          <div className="max-w-[400px] mx-auto sm:w-full">

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-4">
                <label htmlFor="reservationType" className="text-white font-bold mb-2">
                  Reservation Type
                </label>
                <select
                  id="reservationType"
                  name="reservationType"
                  value={formData.reservationType}
                  onChange={handleChange}
                  className="bg-transparent border-2 border-primary-green rounded-lg text-white px-4 py-2"
                  required
                >
                  <option value="">Select Reservation Type</option>
                  <option value="Private Event">Private Event</option>
                  <option value="Guest List">Guest List</option>
                  <option value="Booth Reservation">Booth Reservation</option>
                  <option value="VIP Reservation">VIP Reservation</option>
                </select>
              </div>
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
                  placeholder="Enter your full Name"
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
                  placeholder="Enter your Email"
                />
              </div>
              {/* phone number */}
              <div className="flex flex-col mb-4">
                <label htmlFor="phone_number" className="text-white font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phonenumber"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  className="bg-transparent border-2 border-primary-green rounded-lg text-white px-4 py-2"
                  required
                  placeholder="07xxxxxxxxx"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="date" className="text-white font-bold mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="bg-transparent border-2 border-primary-green rounded-lg text-white px-4 py-2"
                  required
                  // min is the current date
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="time" className="text-white font-bold mb-2">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="bg-transparent border-2 border-primary-green rounded-lg text-white px-4 py-2"
                  required
                  placeholder="OPEN 20:00-2:30"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="guests" className="text-white font-bold mb-2">
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="bg-transparent border-2 border-primary-green rounded-lg text-white px-4 py-2"
                  required
                  min={1}
                  placeholder={placeholder}
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="specialRequest" className="text-white font-bold mb-2">
                  Special Request
                </label>
                <textarea
                  id="specialRequest"
                  name="specialRequest"
                  value={formData.specialRequest}
                  onChange={handleChange}
                  className="bg-transparent border-2 border-primary-green rounded-lg text-white px-4 py-2"
                  placeholder="Enter any special request"
                />
              </div>
              <button
                type="submit"
                className="bg-secondary-green flex justify-center items-center gap-2 text-primary-black px-5 py-2 rounded-full"
              >
                {sending ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="font-bold text-[18px]">Booking...</span>
                  </>
                ) : booked ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-bold text-[18px]">Booked!</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span className="font-bold text-[18px]">Book Now</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
        <div className="md:w-[50%]">
          <FAQ faqs={faqs} />
        </div>
      </div>
    </>
  );
};

export default booking;
