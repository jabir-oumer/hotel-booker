import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };

    window.addEventListener("scroll", handleScroll);

    console.log(location)
    // setIsScrolled(location.pathname  ==  "/book")

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleDropdownToggle = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if(isMenuOpen){
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    // {<nav
    //   className={`header ${
    //     isScrolled ? "bg-white" : "bg-black bg-opacity-40"
    //   }  w-screen z-50`}
    // >}
    <nav className={`border-gray-200 dark:border-gray-600 ${isScrolled ? "bg-white sticky top-0 " : "bg-black bg-opacity-40 absolute left-0 right-0"}  ${location.pathname  ==  "/book" ? "relative" : "absolute"} z-40`}>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse p-4">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className={`self-center text-2xl font-semibold whitespace-nowrap ${isScrolled ? "text-gray-950" : "text-white"}`}>HotelBooker</span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 p-4"
          aria-controls="mega-menu-full"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full"
          className={`items-centerjustify-between font-medium w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <ul className={`flex flex-col mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700 bg-transparent`}>
            <li className = "p-4">
              <NavLink
                to=""
                className={`block rounded hover:bg-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 ${isScrolled ? "text-gray-950" : "text-white" } `}
                aria-current="page"
              >
                HOME
              </NavLink>
            </li>

            <li className = "p-4">
              <NavLink
                to=""
                className={`block rounded hover:bg-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 ${isScrolled ? "text-gray-950" : "text-white" } `}
                aria-current="page"
              >
                ABOUT
              </NavLink>
            </li>

            <li className = "p-4">
              <NavLink
                to=""
                className={`block rounded hover:bg-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 ${isScrolled ? "text-gray-950" : "text-white h-[50%]" } `}
                aria-current="page"
              >
                CONTACT US
              </NavLink>
            </li>

            <li className = "p-1">
              <Link
                to="/book"
                className={`block p-3 hover:text-blue-70 ${isScrolled ? "text-white bg-blue-500 rounded-lg" : "text-black bg-white" }`}
                aria-current="page"
              >
                BOOK NOW
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
      {/* <div className='overflow-hidden absolute w-screen my-0'>
      <div
        id="mega-menu-full-dropdown"
        // className={`mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600 ${
        //   isDropdownOpen ? 'block' : 'hidden'
        // }`}
        className={`mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600 transition-transform duration-500 transform ${
          isDropdownOpen ? 'translate-y-0' : '-translate-y-[200%]'} `}
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
          <ul>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you&apos;re already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you&apos;re already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you&apos;re already using.</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you&apos;re already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you&apos;re already using.</span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you&apos;re already using.</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
