/* eslint-disable react/prop-types */
// import React from 'react';
import {useState} from 'react';

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative">
            <div className="flex items-center justify-center">
                <button className="absolute left-0 top-1/2 transform -translate-y-1/2" onClick={handlePrev}>
                    Previous
                </button>
                <button className="absolute right-0 top-1/2 transform -translate-y-1/2" onClick={handleNext}>
                    Next
                </button>
                {/* <img className="mx-auto animate-fade-in" src={images[currentIndex]} alt="Slider Image" /> */}
            </div>
            <div className="flex justify-center mt-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`animate-fade-in w-8 h-8 mx-1 rounded-full ${
                            index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                        onClick={() => handleClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

// Slider.propTypes = {
//     images: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default Slider;
                    