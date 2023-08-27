import React from 'react';
import '../styles/styles.css';

const Map = () => (
  <div className="flex flex-col md:flex-row gap-4">
    {/* Map Section */}
    <div className="w-full md:w-2/3 xl:w-3/5">
      {/* Embed the map here */}
      <iframe
        title="Map of Nightclub Location"
        width="100%"
        height="400"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-2.9717%2C56.4577%2C-2.9659%2C56.4605&amp;layer=mapnik&amp;marker=56.4591%2C-2.9688&zoom=19"
        style={{ border: '1px solid black' }}
      />
    </div>

    {/* Opening Times and Contact Info */}
    <div className="w-full md:w-1/3 xl:w-2/5 bg-gray-900 p-4 rounded-lg flex flex-col justify-between">
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
