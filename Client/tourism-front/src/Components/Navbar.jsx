import React, { useState } from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white font-bold text-xl">Tourism in Jordan</div>
        </div>
        <div className="hidden md:flex items-center space-x-4 ">
        <Link className="text-white" to="/" >Home</Link>
          {/* <a href="/signup" className="text-white ml-2">Sign Up</a> */}
          <Link className='text-white ml-2' to="/Register">Sign Up</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleNavbar} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center">
          <a href="/" className="text-white py-2">Home</a>
          <a href="/signup" className="text-white py-2">Sign Up</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
