import React from 'react';
import Logo from '../Img/RR.jpg'
import {Link} from "react-router-dom";
import BlogCard from './BlogsCard'

const HeroSection = () => {
  return (
    <>
    <div className="relative bg-white bg-center h-[50rem] flex items-center justify-center min-h-[750px]">
    <img src={Logo} alt=""  className="z-0 w-[100%] h-[100%] absolute" />
      <div className="absolute inset-0 bg-opacity-50 bg-black w-full h-full"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-7xl font-bold mb-4">Welcome to Jordan's Hidden Gems</h1>
        <p className="text-lg mb-8"> Explore the rich history, natural beauty, and vibrant culture of Jordan.
        Let us be your guide to the most enchanting places this country has to
        offer.</p>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold font-[5rem] py-3 px-5 rounded" to="/BlogsForm">Add a Blog</Link>
      </div>
    </div>
    <BlogCard/>
    </>
  );
};

export default HeroSection;
