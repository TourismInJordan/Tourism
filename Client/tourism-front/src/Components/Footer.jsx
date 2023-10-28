import React from 'react';

const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 w-full  bg-gray-800 p-4 text-white text-center ">
      <div className="container mx-auto">
        <p className="mb-2">Follow Us on Social Media:</p>
        <div className="flex justify-center space-x-4">
          {/* <a href="#" className="text-white hover:text-blue-500"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-white hover:text-blue-500"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white hover:text-blue-500"><i className="fab fa-instagram"></i></a> */}
        </div>
        <p className="mt-2">&copy; 2023 Tourism in Jordan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
