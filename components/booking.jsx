'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { bookingVariants } from '../utils/motion';

const booking = () => {
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
    date: '',
    time: '',
    guests: '',
    specialRequest: '',
    reservationType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'reservationType' && value === 'GuestList') {
      setPlaceholder('You can add up to 3 people on the guestlist');
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
          date: '',
          time: '',
          guests: '',
          specialRequest: '',
          reservationType: '',
      });
      alert('Your reservation has been submitted successfully');
    } else if (response.status === 442) {
      alert('Please ensure you fill all the fields');
      throw new Error(`${response}`);
    } else {
      alert('Something Went Wrong Please try again or Email us directly at\nafrobeatsdundee@gmail.com');
      throw new Error(`Something Went Wrong ${response}`);
    }
  } catch (error){
    console.log('Error:', error);
  }
};

  //bookings are only available on tuesdays, fridays and saturdays
  // const getMinDate = () => {
  //   const today = new Date();
  //   const day = today.getDay();
  //   const date = today.getDate();
  //   const month = today.getMonth() + 1;
  //   const year = today.getFullYear();
  //   const minDate = `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`;
  //   if (day === 2 || day === 5 || day === 6){
  //     return minDate;
  //   } if (day === 0){
  //     return `${year}-${month < 10 ? `0${month}` : month}-${date + 2 < 10 ? `0${date + 2}` : date + 2}`;
  //   } if (day === 1){
  //     return `${year}-${month < 10 ? `0${month}` : month}-${date + 1 < 10 ? `0${date + 1}` : date + 1}`;
  //   } if (day === 3){
  //     return `${year}-${month < 10 ? `0${month}` : month}-${date + 3 < 10 ? `0${date + 3}` : date + 3}`;
  //   } if (day === 4){
  //     return `${year}-${month < 10 ? `0${month}` : month}-${date + 2 < 10 ? `0${date + 2}` : date + 2}`;
  //   }
  // };

  // const getMaxDate = () => {
  //   const today = new Date();
  //   const day = today.getDay();
  //   const date = today.getDate();
  //   const month = today.getMonth() + 1;
  //   const year = today.getFullYear();
  //   const maxDate = `${year + 1}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`;
  //   if (day === 2 || day === 5 || day === 6){
  //     return maxDate;
  //   } if (day === 0){
  //     return `${year}-${month < 10 ? `0${month}` : month}-${date + 2 < 10 ? `0${date + 2}` : date + 2}`;
  //   } if (day === 1){
  //     return `${year}-${month < 10 ? `0${month}` : month}-${date + 2 < 10 ? `0${date + 1}` : date + 1}`;
  //   } if (day === 3){
  //     return `${year}-${month < 10 ? `0${month}` : month}-${date + 2 < 10 ? `0${date + 3}` : date + 3}`;
  //   } if (day === 4){
  //     return `${year}-${month < 10 ? `0${month}` : month}-${date + 2 < 10 ? `0${date + 7}` : date + 2}`;
  //   }
  // };
  return (
    <motion.div
      variants={bookingVariants}
      initial="hidden"
      animate="show"
      className="bg-primary-black p-8 rounded-lg"
    >
      <div className="max-w-[400px] mx-auto sm:w-full">
        <div className="alert alert-success">
          <h1 className="text-white text-center font-bold text-[24px] mb-0">AFRO BEATS DUNDEE</h1>
          {/* open days */}
          <h2 className="hero_description text-center font-bold text-[18px] mb-0">OPEN DAYS</h2>
          <h3 className="text-white text-center font-bold text-[18px] mb-0">TUESDAY, FRIDAY & SATURDAY</h3>
          {/* open hours */}
          <h2 className="hero_description text-center font-bold text-[18px] mb-0">OPEN HOURS</h2>
          <h3 className="text-white text-center font-bold text-[18px] mb-7">20:00 - 2:30</h3>
        </div>

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
              <option value="GuestList">Guest List</option>
              <option value="Booth">Booth Reservation</option>
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
              max={10}
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
            />

          </div>

          <button
            type="submit"
            className="bg-secondary-green flex items-center justify-center text-primary-black px-5 py-2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />

            </svg>
            <span className="font-bold text-[18px]">BOOK NOW</span>
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default booking;
