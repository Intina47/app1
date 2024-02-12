/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { navlink } from '../constants';

const PromoCard = ({ image, title, buttonText, first, last, ticketLink}) => {
  const handleShare = () => {
    console.log('share');
    if (navigator.share) {
      navigator.share({
        title,
        text: 'I bet this is gonna be lit, wanna tag along?',
        url: window.location.href,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    } else {
      alert('Sorry! sharing is not supported on this browser');
    }
  };
    let borderRadiusClass = 'rounded-bl-[20px] rounded-br-[20px]';
    if (first) {
        borderRadiusClass += ' rounded-tl-[20px]';
      }
      if (last) {
        borderRadiusClass += ' rounded-tr-[20px]';
      }
        return (
          <div className={`w-[300px] overflow-hidden shadow-lg mx-2 ${borderRadiusClass} min-w-[19rem]`}>
            <div className="relative cursor-pointer" onClick={() => window.open(image, '_blank')}>
              {/* Image section */}
              <LazyLoadImage
                src={image}
                alt={title}
                className="w-full h-[300px] object-cover"
              />
              {ticketLink && (
              <div className="absolute top-0 right-0 ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full opacity-75">
                <a
                  href={ticketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transform transition-transform duration-200 hover:scale-110"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right mr-2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  Get Ticket
                </a>
              </div>
                      )}
            </div>
            <div className="p-4 bg-white flex justify-start space-x-4">
              <Link href={navlink[2].url}>
                <div className="bg-gradient-to-r items-center justify-center text-black text-sm px-5 py-2.5 font-medium inline-flex rounded mt-1 transform hover:scale-105 transition duration-300">
                  {buttonText}
                </div>
              </Link>
              <button
                type="button"
                onClick={handleShare}
                className="bg-gradient-to-r flex items-center justify-center text-black text-sm px-1 py-1 rounded mt-1 transform hover:scale-105 transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M19 22H5c-1.654 0-3-1.346-3-3V8h2v11c0 .552.449 1 1 1h14c.552 0 1-.448 1-1v-2h2v2C22 20.654 20.654 22 19 22zM16.707 11.707L15.293 10.293 18.586 7 15.293 3.707 16.707 2.293 21.414 7z" /><path d="M8,18H6v-1c0-6.065,4.935-11,11-11h3v2h-3c-4.963,0-9,4.037-9,9V18z" /></svg>
                <span className="ml-2">Share</span>
              </button>

            </div>
          </div>
  );
    };

    export default PromoCard;
