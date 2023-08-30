/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-promise-executor-return */

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { membershipFormVariants } from '../utils/motion';
import { calculateAge, isUserOldEnough } from '../utils/dateUtils';

const MembershipForm = () => {
  const [sending, setSending] = useState(false);
  const [booked, setbooked] = useState(false);
  const [isUnder18, setIsUnder18] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comfirmemail: '',
    dob: '',
    isStudent: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'dob') {
      const age = calculateAge(value);
      setIsUnder18(age < 18);
    }
    if (name === 'isStudent') {
      if (value === 'yes') {
        setFormData({ ...formData, [name]: value, graduationYear: '' });
      } else {
        setFormData({ ...formData, [name]: value, graduationYear: '' });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isUserOldEnough(formData.dob)) {
      alert('Sorry! You must be 18 years old or older to submit this form.');
      return;
    }
    try {
      setSending(true);
      setbooked(false);

      // Simulate an asynchronous operation (e.g., subscribing)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200){
        const data = await response.json();
        console.log(data);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          comfirmemail: '',
          dob: '',
          isStudent: '',
      });
      setSending(false); // Hide loading state
      setbooked(true); // Show subscribed state
      setTimeout(() => setbooked(false), 5000);
      alert('Thanks, We sent a magic Link to your Email');
    } else if (response.status === 400) {
      const errorData = await response.json();
      setSending(false);
      if (errorData.error === 'Emails-no-match') {
        alert('Sorry your emails do not match');
      } else if (errorData.error === 'graduation-year'){
        alert('Please enter your graduation year');
      }
    } else {
      setSending(false);
      alert('Something Went Wrong Please try again or Email us directly at\nafrobeatsdundee@gmail.com');
      throw new Error(`Something Went Wrong ${response}`);
    }
  } catch (error){
    console.log('Error:', error);
  }
};
// make sure email match
const doEmailsMatch = () => formData.email === formData.comfirmemail;

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        variants={membershipFormVariants}
        initial="hidden"
        animate="show"
        className="bg-primary-black p-8 rounded-lg md:w-[50%] md:mr-0"
      >

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-white font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-transparent border-2 border-primary-green rounded-lg text-white px-4 py-2"
              required
              placeholder="Enter your first Name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="lastName" className="text-white font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-transparent border-2 border-primary-green rounded-lg text-white px-4 py-2"
              required
              placeholder="Enter your last Name"
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
          <div className="flex flex-col mb-4">
            <label htmlFor="comfirmemail" className="text-white font-bold mb-2">
              Confirm Email
            </label>
            <input
              type="email"
              id="comfirmemail"
              name="comfirmemail"
              value={formData.comfirmemail}
              onChange={handleChange}
              className={`bg-transparent border-2 ${
            doEmailsMatch() ? 'border-primary-green' : 'border-red-500'
          } rounded-lg text-white px-4 py-2`}
              required
              placeholder="Please confirm your Email"
            />
            {!doEmailsMatch() && (
            <p className="text-red-500 mt-2">Emails do not match</p>
        )}
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="dob" className="text-white font-bold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              onBlur={handleChange} // Add onBlur event handler
              className={`bg-transparent border-2 border-primary-green rounded-lg text-white px-4 py-2 ${
          isUnder18 ? 'border-red-500' : '' // Apply red border if under 18
        }`}
              required
            />
            {isUnder18 && (
            <p className="text-red-500">You must be 18 years old or older</p>
      )}
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="isStudent" className="text-white font-bold mb-2">
              Are you a student?
            </label>
            <select
              id="isStudent"
              name="isStudent"
              value={formData.isStudent}
              onChange={handleChange}
              className="bg-transparent border-2 border-primary-green rounded-lg text-white px-4 py-2"
              required
            >
              <option value="">Please select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div
            className={`flex flex-col mb-4 ${formData.isStudent === 'yes' ? '' : 'hidden'}`}
          >
            <label htmlFor="graduationYear" className="text-white font-bold mb-2">
              Graduation Year
            </label>
            <input
              type="date"
              id="graduationYear"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              className="bg-transparent border-2 border-primary-green rounded-lg text-white px-4 py-2"
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
                <span className="font-bold text-[18px]">Processing...</span>
              </>
                ) : booked ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-bold text-[18px]">Membership Confirmed!</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span className="font-bold text-[18px]">Register</span>
                  </>
                )}
          </button>
        </form>

      </motion.div>
    </div>
  );
};

export default MembershipForm;
