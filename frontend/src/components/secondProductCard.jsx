import Room1 from "../assets/rooms-1.webp";
import Room2 from "../assets/rooms-2.webp";
import Room3 from "../assets/rooms-3.webp";
import Room4 from "../assets/rooms-4.webp";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

const SecondProductCard = ({onClick}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,

    // fade: true,
  };

  return (
    // <div className="flex h-min w-min bg-white border border-gray-200 rounded-lg shadow md:flex-row  dark:border-gray-700 dark:bg-gray-800">
    //   <div className='flex-1'>
    //   <ProductCard/>
    //   </div>
    //   <div className="flex flex-col justify-center p-4 leading-normal flex-1 pr-10">
    //     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Summary</h5>
    //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Tax: $90</p>
    //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Total: $90</p>
    //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">1 Rooms</p>
    //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">2 Guests</p>
    //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Check In Date: </p>
    //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Check Out Date: </p>
    //   </div>
    // </div>
    <div className="flex flex-row md:flex-row justify-evenly align-middle px-5">
      <form className="flex-1 max-w-sm">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Flowbite"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button
          onClick={onClick}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <div className="flex h-min w-min bg-white border border-gray-200 rounded-lg shadow md:flex-row  dark:border-gray-700 dark:bg-gray-800">
        <div className="flex-1">
          <ProductCard/>
        </div>
        <div className="flex flex-col justify-center p-4 leading-normal flex-1 pr-10">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Summary
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Tax: $90
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Total: $90
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            1 Rooms
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            2 Guests
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Check In Date:{" "}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Check Out Date:{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondProductCard;
