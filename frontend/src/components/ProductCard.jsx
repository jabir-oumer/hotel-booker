import Room1 from '../assets/rooms-1.webp';
import Room2 from '../assets/rooms-2.webp';
import Room3 from '../assets/rooms-3.webp';
import Room4 from '../assets/rooms-4.webp';
import Slider from 'react-slick';
import { useRef } from 'react';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  
  // arrows: true,
  // prevArrow: <PrevArrow />,
  // nextArrow: <NextArrow />,
  // centerMode: true,
  // autoplay: true,
  // autoplaySpeed: 500
};


const ProductCard = ({onClick}) => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  
  return (
    <div className="relative w-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* <a href="#"> */}
          <div className = "relative">
          <Slider {...settings} ref={sliderRef} className = "relative m-8">
                  <img className="rounded-lg" src={Room1} alt="product image" />
                  <img className="rounded-lg" src={Room3} alt="product image" />
                  <img className="rounded-lg" src={Room4} alt="product image" />
                  <img className="rounded-lg" src={Room2} alt="product image" />
          </Slider>
          <div className = "absolute w-full flex justify-between pl-8 pr-8 top-1/2">
            
        <button className="button p-[.1rem] " onClick={previous}>
          <img src="https://www.hyatt.com/hds/static/images/0.latest/themes/regency/pagination-on-light-enabled.svg" alt="" height="32" width="32" className = "border-2 border-transparent hover:border-none rotate-180 "/>
        </button>
        <button className="button p-[.1rem] " onClick={next}>
        <img src="https://www.hyatt.com/hds/static/images/0.latest/themes/regency/pagination-on-light-enabled.svg" alt="" height="32" width="32" className = "border-2 border-transparent hover:border-none"/>
        </button>
        </div>
      </div>
      {/* </a> */}
      <div className="px-5 pb-5">
        {/* <a href="#"> */}
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">One King Bed</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Free wifi, free light breakfast, mini refregator, microwave, air conditioning, tea/coffee maker</p>
        {/* </a> */}
        <div className="flex items-center mt-2.5 mb-5" 
        onClick={onClick}
        >
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(4)].map((_, index) => (
              <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
          {
            onClick && <button onClick={onClick}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Select</button>
        
          }</div>
      </div>
      
    </div>
  );
};

export default ProductCard;
