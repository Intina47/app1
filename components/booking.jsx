'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { bookingVariants } from '../utils/motion';
import { useRouter } from 'next/router';

const booking = () => {
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
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    // if(name === "reservationType"){
    //   const urlParams = new URLSearchParams(window.location.search);
    //   const reservationType = urlParams.get('type');
    //   setFormData((prevFormData) => ({ ...prevFormData, reservationType }));
    //   console.log(reservationType);
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if(response.ok){
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
    }else{
      console.log('something went wrong', response.statusText);
    }
  }catch(error){
    console.log('Error:', error);
  }
};

  return (
    <motion.div
      variants={bookingVariants}
      initial="hidden"
      animate="show"
      className="bg-primary-black p-8 rounded-lg"
    >
      <div className="max-w-[400px] mx-auto sm:w-full">
      <h1 className="text-white text-center font-bold text-[24px] mb-8">AFRO BEATS DUNDEE</h1>
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
