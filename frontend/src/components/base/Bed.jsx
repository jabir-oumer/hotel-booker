import  { useState } from 'react';

const Bed = () => {
  const [bedrooms, setBedrooms] = useState(3);

  const handleIncrement = () => {
    
      setBedrooms((prevBedrooms) => prevBedrooms + 1);
    
  };

  const handleDecrement = () => {
    if (bedrooms > 1) {
      setBedrooms((prevBedrooms) => prevBedrooms - 1);
    }
  };

  return (
    <div>
      <form className="max-w-xs mx-auto">
        <label htmlFor="bedrooms-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
         
        </label>
        <div className="relative flex items-center max-w-[11rem]">
          <button
            type="button"
            id="decrement-button"
            onClick={handleDecrement}
            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          >
            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
            </svg>
          </button>
          <input
            type="text"
            id="bedrooms-input"
            data-input-counter
            data-input-counter-min="1"
            data-input-counter-max="5"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            value={bedrooms}
            required
          />
          <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
            <svg className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
            </svg>
            <span>Bedrooms</span>
          </div>
          <button
            type="button"
            id="increment-button"
            onClick={handleIncrement}
            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          >
            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
            </svg>
          </button>
        </div>
    
      </form>
    </div>
  );
};

export default Bed;
