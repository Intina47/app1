/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="bg-primary-black p-8 rounded-lg">
      <h2 className="text-white text-center font-bold text-[24px] mb-4">Frequently Asked Questions</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index} className="mb-4">
            <button
              className="flex items-center justify-between w-full text-white font-bold text-[18px] bg-transparent border-b border-gray-300 py-6"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && <p className="text-white mt-2">{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
