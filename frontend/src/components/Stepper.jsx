/* eslint-disable no-unused-vars */
import  { useState } from 'react';


// import Rooms1 from '../assets/rooms-1.webp';
// import Rooms2 from '../assets/rooms-2.webp';
// import Rooms3 from '../assets/rooms-3.webp';
// import Rooms4 from '../assets/rooms-4.webp';
import Bed from './base/Bed';
import ProductCardSlider from './productCardSlider';
import SecondProductCard from './secondProductCard';
import PaymentPage from './payment';

// const images = [Rooms1, Rooms2, Rooms3, Rooms4];

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(1); // Default to the first step
  const [step1Content, setStep1Content] = useState('adfaf');
  const [step2Content, setStep2Content] = useState('adf');

  const handleStepClick = (step) => {
    // Only allow clicking on previous steps or the current active step
    if (step <= activeStep) {
      setActiveStep(step);
    }
  };

  const handleNextClick = () => {
    // Add validation logic here before proceeding to the next step
    if ((activeStep === 1 && step1Content.trim() !== '') || (activeStep === 2 && step2Content.trim() !== '')) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <div className='w-full px-10 text-start'>
            <h1>Select Room Info</h1>
            
            {/* Add your content for Step 1 here */}
           <div className="flex gap-4 ">
           
           <Bed data={"Bedrooms"}/>
            <Bed data={"guests"}/>
            3
           </div>
           <hr className="h-1.5 rounded-lg mb-8 mt-5 bg-gray-200 border-0 dark:bg-gray-700"/>

           <ProductCardSlider onClick={handleNextClick}/>

          </div>
        );
      case 2:
        return (
          <div>
            <p>User Info</p>
            {/* Add your content for Step 2 here */}
            
            <SecondProductCard onClick = {handleNextClick}/>

            {/*  */}
            
{/* <form>
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div> 
    <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
    </div> 
    <div className="mb-6">
        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
        <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
    </div> 
    
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form> */}

            {/*  */}
          </div>
        );
      case 3:
        return (
          <div>
            {/* Add your content for Step 3 here */}
            <PaymentPage/>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 min-h-screen min-w-[100vw]">
      <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        {[1, 2, 3].map((step) => (
          <li
            key={step}
            className={`flex items-center cursor-pointer ${
              step === activeStep ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'
            }`}
            onClick={() => handleStepClick(step)}
          >
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0">
              {step}
            </span>
            {step === 1 ? 'Select Room Info' : step === 2 ? 'User Info' : 'Payment'}
            {step !== 3 && (
              <svg
                className={`w-3 h-3 ms-2 sm:ms-4 ${step !== activeStep && 'rtl:rotate-180'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m7 9 4-4-4-4M1 9l4-4-4-4"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>


  <div className="w-full">

      {/* Render the content based on the active step */}
      {renderStepContent()}

      </div>
      {/* Navigation button */}
      {/* {activeStep < 3 && (
        <button
          className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          onClick={handleNextClick}
          disabled={(activeStep === 1 && step1Content.trim() === '') || (activeStep === 2 && step2Content.trim() === '')}
          >
          Next
        </button>
      )} */}
      </div>
  );
};

export default Stepper;
