/* eslint-disable react/button-has-type */
import Link from 'next/link';
import { navlink } from '../constants';

const PromoCard = ({ image, title, description, buttonText, first, last}) => {
    let borderRadiusClass = 'rounded-bl-[20px] rounded-br-[20px]';
    if (first) {
        borderRadiusClass += ' rounded-tl-[20px]';
      }
      if (last) {
        borderRadiusClass += ' rounded-tr-[20px]';
      }
        return (
          <div className={`w-[300px] overflow-hidden shadow-lg mx-2 ${borderRadiusClass} min-w-[19rem]`}>
            <img src={image} alt={title} className="w-full h-[300px] object-cover" />
            <div className="p-4 bg-white">
              <h2 className="text-lg font-bold">{title}</h2>
              <p className="text-sm text-gray-600 mt-1">{description}</p>
              <Link href={navlink[2].url}>
                <div className="bg-gradient-to-r text-black text-sm px-4 py-2 rounded-full mt-4 transform hover:scale-105 transition duration-300">
                  {buttonText}
                </div>
              </Link>
            </div>
          </div>
  );
    };

    export default PromoCard;
