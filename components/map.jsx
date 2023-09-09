import React from 'react';
import '../styles/styles.css';

const Map = () => (
  <div className="flex flex-col md:flex-row gap-4">
    {/* Map Section */}
    <div className="w-full md:w-3/3 xl:w-3/5">
      {/* Embed the map here */}
      <iframe
        title="Afro Beats Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2204.423865844446!2d-2.9827748232256854!3d56.46045853726449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48865d655352dea7%3A0xef6a8ade94cc6167!2sAfro%20Beats!5e0!3m2!1sen!2suk!4v1693377386956!5m2!1sen!2suk"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

    </div>

    {/* Opening Times and Contact Info */}
    <div className="w-full md:w-2/5 xl:w-2/5 bg-gray-900 p-4 rounded-lg flex flex-col justify-between">
      <h3 className="text-white text-xl font-bold mb-2">Opening Times</h3>
      <p className="text-gray-400 mb-4">
        Tuesday: 22:00 PM - 2:30 AM<br />
        Friday: 20:00 PM - 2:30 AM<br />
        Saturday: 20:00 PM - 2:30 AM<br />
      </p>

      <h3 className="text-white text-xl font-bold mb-2">Contact Information</h3>
      <p className="text-gray-400">
        <span className="font-semibold">Address:</span> 3 Session Street, DD1 5DN, Dundee<br />
        <span className="font-semibold">Tel:</span> <a href="tel:01382 782663" className="text-primary-green">01382 782663</a><br />
        <span className="font-semibold">Email:</span> <a href="mailto:afrobeatsdundee@gmail.com" className="text-primary-green">afrobeatsdundee@gmail.com</a>
      </p>

      <div className="mt-4">
        <p className="text-white text-lg mb-2">Elevate Your Event with Us!</p>
        <p className="text-gray-400 mb-4">
          <span className="font-extrabold text-white">Open for private events</span> on non-standard days as well. Let us transform your special occasion into an unforgettable experience.
        </p>
        <a href="/reservation?type=private-event" className="inline-block bg-gradient-to-r text-primary-black hover:text-scale-105 font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out">
          Book Your Event
        </a>
        <p className="text-gray-400 mt-2">
          Feel free to reach out to us via phone or email for inquiries and to learn more about our exceptional event offerings.
        </p>
      </div>

    </div>
  </div>
  );

  export default Map;
