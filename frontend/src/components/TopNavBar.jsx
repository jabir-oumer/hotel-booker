import { useState } from 'react';

const TopNavBar = () => {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const toggleLanguageDropdown = () => {
        setIsLanguageOpen(!isLanguageOpen);
        setIsSignUpOpen(false);
    };

    const toggleSignUpDropdown = () => {
        setIsSignUpOpen(!isSignUpOpen);
        setIsLanguageOpen(false);
    };

    return (
        <nav className="flex items-center justify-between bg-white px-6 py-2 w-screen">
            <div className="flex items-center">
                <div className="font-bold text-xl">HOTEL BOOKER</div>
            </div>
            <div className="flex items-center">
                <div className="relative flex align-middle">
                    <button className="focus:outline-none flex items-center" onClick={toggleLanguageDropdown}>
                        <svg className="h-8 w-8 ml-2" // Increase the height and width of the SVG
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path d="M9 1a8 8 0 110 16A8 8 0 019 1zm-.26 12.524l.16-.009a6.439 6.439 0 00-2.837.765c.235.34.5.633.793.884.435.373.9.623 1.363.775.226.073.406.11.523.125l-.002-2.54zm.72.014v2.495a3.27 3.27 0 00.346-.094 3.992 3.992 0 001.363-.775c.29-.249.552-.539.786-.873a6.419 6.419 0 00-2.494-.753zM5.49 14.63l-.2.14a6.62 6.62 0 00-.385.306 7.25 7.25 0 001.955.935 5.347 5.347 0 01-1.37-1.381zm7.039.01l-.02.029a5.336 5.336 0 01-1.321 1.328 7.307 7.307 0 001.91-.92 6.42 6.42 0 00-.57-.438zM4.154 9.46h-2.47a7.315 7.315 0 002.67 5.209c.249-.225.512-.43.787-.615-.617-1.157-.968-2.675-.987-4.594zm12.161 0l-2.445-.001v.032c-.022 1.912-.375 3.423-.993 4.576.269.181.525.382.769.6a7.31 7.31 0 002.67-5.207zm-3.115 0H9.46v3.406l.172.015a7.1 7.1 0 012.672.836c.557-1.052.878-2.452.896-4.256zm-4.46 0H4.824v.017c.02 1.79.34 3.181.89 4.23a7.106 7.106 0 012.956-.851l.07-.004V9.459zM4.155 3.501l-.01.008a7.311 7.311 0 00-2.47 5.23h2.487c.058-1.814.402-3.284.978-4.442-.35-.234-.68-.5-.985-.796zm1.559 1.147l-.02.041c-.502 1.05-.806 2.387-.861 4.05H8.74V5.504l-.07-.005a7.106 7.106 0 01-2.956-.851zm8.13-1.148l.189-.187a7.218 7.218 0 01-1.153.973c.578 1.16.925 2.633.983 4.454l2.462-.001a7.312 7.312 0 00-2.48-5.239zm-1.538 1.137l-.275.143a7.106 7.106 0 01-2.57.71L9.46 8.739h3.732c-.056-1.691-.37-3.045-.886-4.102zM8.294 2.102a4.39 4.39 0 00-1.393.9c-.32.303-.609.654-.862 1.058a6.424 6.424 0 002.7.772l.002-2.875a3.39 3.39 0 00-.447.145zm1.166-.096v2.81a6.435 6.435 0 002.5-.754l.02-.012a5.362 5.362 0 00-.856-1.047 4.39 4.39 0 00-1.664-.997zm-2.22-.123l-.114.03a7.299 7.299 0 00-2.444 1.164c.247.233.51.445.786.634.284-.457.61-.854.972-1.196.269-.253.538-.462.8-.632zm3.56.01l.038.025c.245.163.496.36.746.597.36.34.683.732.965 1.182.27-.184.527-.392.769-.62A7.288 7.288 0 0010.8 1.894z"></path>
                        </svg>
                        <svg
                  // className="w-2.5 h-2.5 ms-2.5"
                  className={`w-2.5 h-2.5 ms-2.5 transition-transform transform ${isLanguageOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
                    </button>
                    {/* Dropdown content */}
                    {isLanguageOpen && (
                        <div className="absolute right-0 mt-9 w-48 bg-white opacity-95 shadow-lg z-50">
                            {/* Dropdown items */}
                            <div className="py-1">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-950 hover:bg-gray-100"
                                >
                                    English
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-950 hover:bg-gray-100"
                                >
                                    Spanish
                                </a>
                                {/* Add more language options here */}
                            </div>
                        </div>
                    )}
                </div>
                <div className="relative mx-4">
                    <button className="focus:outline-none flex gap-1 items-center" onClick={toggleSignUpDropdown}>
                        <svg className="h-8 w-8 ml-2" // Increase the height and width of the SVG
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"><g fill="#282828" fillRule="evenodd" transform="translate(-6 -6)"><path d="m16 7c4.9705627 0 9 4.0294373 9 9 0 2.6374415-1.1344855 5.0099096-2.9420826 6.6560307-1.2108066-2.1055131-3.4695407-3.7148542-6.0579028-3.7148542-2.5900622 0-4.8515869 1.6028857-6.06224309 3.70971-1.80538287-1.645364-2.93777151-4.0158835-2.93777151-6.6508865 0-4.9705627 4.0294373-9 9-9zm.0000219 4c-1.9329999 0-3.5 1.5801715-3.5 3.5294118s1.5670001 3.5294117 3.5 3.5294117c1.9329853 0 3.4999854-1.5801714 3.4999854-3.5294117s-1.5670001-3.5294118-3.4999854-3.5294118z"></path><path d="m16 7c4.9705627 0 9 4.0294373 9 9s-4.0294373 9-9 9-9-4.0294373-9-9 4.0294373-9 9-9zm0 1c-4.418278 0-8 3.581722-8 8s3.581722 8 8 8 8-3.581722 8-8-3.581722-8-8-8z"></path></g></svg>
                        
                        Sign Up
                        <svg
                  // className="w-2.5 h-2.5 ms-2.5"
                  className={`w-2.5 h-2.5 ms-2.5 transition-transform transform ${isSignUpOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
                    </button>
                    {/* Dropdown content */}
                    {isSignUpOpen && (
                        <div className="absolute right-0 w-48 bg-white opacity-95 shadow-lg z-50">
                            {/* Dropdown items */}
                            <div className="py-1">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Login
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Register
                                </a>
                                {/* Add more signup options here */}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default TopNavBar;
