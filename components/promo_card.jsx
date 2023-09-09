/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import Link from 'next/link';
import { navlink } from '../constants';

const PromoCard = ({ image, title, buttonText, first, last}) => {
    let borderRadiusClass = 'rounded-bl-[20px] rounded-br-[20px]';
    if (first) {
        borderRadiusClass += ' rounded-tl-[20px]';
      }
      if (last) {
        borderRadiusClass += ' rounded-tr-[20px]';
      }
        return (
          <div className={`w-[300px] overflow-hidden shadow-lg mx-2 ${borderRadiusClass} min-w-[19rem]`}>
            <div className="cursor-pointer" onClick={() => window.open(image, '_blank')}>
              {/* Image section */}
              <img src={image} alt={title} className="w-full h-[300px] object-cover" />
            </div>
            <div className="p-4 bg-white">
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
