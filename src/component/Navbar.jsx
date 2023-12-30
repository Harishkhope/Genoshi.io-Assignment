import React, { useState } from 'react';
import Bars from '../assets/bars.svg';
import Cross from '../assets/xmark.svg';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className="sticky top-0 z-50 container py-6 flex justify-between items-center max-w-6xl mx-auto px-5 sm:px-6">
                <div className="flex items-center space-x-4">
                    <img className='h-12' src={logo} alt="" />
                </div>
                <div className="flex items-center space-x-4">
                    {/* Toggle button */}
                    <div
                        onClick={toggleMenu}
                        className="cursor-pointer lg:hidden text-white hover:text-gray-100"
                    >
                        {isMenuOpen ? (
                            <img src={Cross} alt="Close menu" className="h-6 w-6" />
                        ) : (
                            <img src={Bars} alt="Open menu" className="h-6 w-6" />
                        )}
                    </div>

                    {/* Responsive menu items */}
                    <div className={`lg:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col space-y-4 absolute top-16 right-0 bg-white p-4 rounded-md shadow-md`}>
                        <div className="font-medium text-gray-800 hover:text-gray-600 px-2 py-1 cursor-pointer">
                            Sign in
                        </div>
                        <div className="text-white bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4 cursor-pointer">
                            Sign up
                        </div>
                    </div>

                    <div className='hidden lg:flex'>
                        <div className="font-medium text-white dark:text-gray-300 hover:text-gray-100 px-5 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer">
                            Sign in
                        </div>
                        <div className="text-white bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4 cursor-pointer">
                            Sign up
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

function FlagIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
        </svg>
    );
}

export default Navbar;
