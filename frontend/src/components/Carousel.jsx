import  { useState } from 'react';

const Carousel = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handlePrev = () => {
    setActiveItem((prevItem) => (prevItem > 0 ? prevItem - 1 : 0));
  };

  const handleNext = () => {
    const totalItems = 3; // Update this value accordingly
    setActiveItem((prevItem) => (prevItem < totalItems - 1 ? prevItem + 1 : prevItem));
  };

  const getTranslateX = (index) => {
    return `calc( ${75 * (index - activeItem)}%)`;
  };

  return (
    <div className="relative w-full h-screen ">
      <div className="relative h-[90%] overflow-hidden rounded-lg">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className=" duration-700 ease-in-out"
            style={{ transform: `translateX(${getTranslateX(index)})` }}
          >
            <img
              src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${index + 1}.jpg`}
              className="absolute max-w-full  -translate-x-1/2 top-0 left-1/2"
              alt=""
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
