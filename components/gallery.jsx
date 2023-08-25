import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const Gallery = () => {
  const [images, setImages] = useState([]);

  // Fetch images from Facebook account using the Graph API
  useEffect(() => {
    // const accessToken = process.env.ACCESS_TOKEN;
    // const pageId = process.env.AppID;
    const accessToken = 'EAABiLuhShQkBOybpMqNXEVmzv78aloZAFkw3q1lNXWQZBExtuR5Ps8It6hhYwUrpIVB7j7c80dgeUyN6DBUC0eDgE7ZCABondHymJ2nZAm1gnyfL9ZBgHUZAp08MUgE6oUe8g9qBaTQvLpUXdTQjB90PNvoiwFjQ9umx3WwHOz2vYtayRNTiChComJScOvPCFH32rjZAMHax9wQif87fhVy2sLyTS90YszRElRkH76MzBEHkYJtuoSP5ij22YGNpgZDZD';
    const pageId = '134810914053622';

    const apiUrl = `https://graph.facebook.com/v17.0/${pageId}/photos?fields=images&access_token=${accessToken}`;

    axios.get(apiUrl)
      .then((response) => {
        const fetchedImages = response.data.photos.data;
        setImages(fetchedImages);
        console.log('data retrieved successfuly');
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div className="gallery">
      <h2 className="text-xl font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.images[0].source} // Choose the appropriate image size
            alt="Gallery"
            className="w-full h-auto rounded-lg shadow-md cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
