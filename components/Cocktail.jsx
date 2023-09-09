/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';

const CocktailCard = ({ cocktail }) => {
  const [showOriginalPrice, setShowOriginalPrice] = useState(true);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setShowOriginalPrice((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval1);
  }, []);

  return (
    <div className="max-w-xl mx-auto my-8 p-4 border border-gray-300 rounded-lg">
      <div className="text-center">
        <img
          src={cocktail.imageurl}
          alt={cocktail.name}
          className="w-80 h-80 mx-auto mb-4 transform hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="text-white">
        <h2 className="text-xl font-bold text-center">{cocktail.name}</h2>
        <p className="text-center">{cocktail.description}</p>
      </div>
      <div className="text-center my-4">
        <div className="text-white text-lg font-bold">
          Regular: {cocktail.regularPrice}
        </div>
        <div className="text-lg font-bold text-white">
          {showOriginalPrice ? (
            <>
              Jug: <span className="text-green-600">{cocktail.jugPrice}</span>
            </>
          ) : (
            <span className="text-red-600">Get More for Less</span>
          )}
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {cocktail.ingredients.map((ingredient, index) => (
            <div key={index} className="text-center" style={{ minWidth: '150px' }}>
              <div className="flex items-center">
                <div className="rounded-l-lg overflow-hidden">
                  <img src={ingredient.imageurl} alt={ingredient.name} className="w-16 h-20" />
                </div>
                <div className="bg-white text-black rounded-r-lg p-2 ml-0 h-20 flex-1">
                  <p className="font-bold text-xs">{ingredient.name}</p>
                  <p>{ingredient.quantity}</p>
                  <p>{ingredient.AlcoholicPercentage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
