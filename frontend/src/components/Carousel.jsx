import  { useState } from 'react';

import Rooms1 from '../assets/rooms-1.webp';
import Rooms2 from '../assets/rooms-2.webp';
import Rooms3 from '../assets/rooms-3.webp';
import Rooms4 from '../assets/rooms-4.webp';

const images = [Rooms1, Rooms2, Rooms3, Rooms4];

const Carousel = () => {
  const [activeItem, setActiveItem] = useState(1);

  const handlePrev = () => {
    const totalItems = images.length;
    setActiveItem((prevItem) => (prevItem > 0 ? prevItem - 1 : totalItems - 1)); // Cycle to the last item when at the beginning
  };

  const handleNext = () => {
    const totalItems = images.length;
    setActiveItem((prevItem) => (prevItem < totalItems - 1 ? prevItem + 1 : 0)); // Cycle to the first item when at the end
  };

  const handleImageClick = (index) => {
    setActiveItem(index);
  };

  const getTranslateX = (index) => {
    return `calc( ${65 * (index - activeItem)}%)`;
  };

  return (
    <div className="relative w-full h-screen  mt-6">
      <div className="relative h-[90%] overflow-hidden rounded-lg">
        {images.map((image, index) => (
                  <div
                    key={index}
                    className="duration-700 ease-in-out"
                    style={{ transform: `translateX(${getTranslateX(index)})` }}
                    
                  >
                    <img
                      src={image}
                      className="absolute w-3/5 h-[90vh] -translate-x-1/2  top-0 left-1/2"
                      alt={`Room ${index + 1}`}
                      onClick={() => handleImageClick(index)}
                    />
                  </div>
                ))}
      </div>

      <div className="flex justify-center items-center pt-4">
        <button
          type="button"
          className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
            <svg
              className="rtl:rotate-180 w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
            <svg
              className="rtl:rotate-180 w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
