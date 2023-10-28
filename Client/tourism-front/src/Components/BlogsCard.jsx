import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const BlogCard = ({}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchBlogs = async () => {
          try {
            const response = await axios.get('http://localhost:3001/blogs');
            setBlogs(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching blogs:', error);
          }
        };
    
        fetchBlogs();
      }, []);

  return (
    <>
    {blogs.map((blog) => (  
         <Link to={`/BlogsDetails/${blog.id}`} className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
        <img className="w-full h-48 object-cover object-center" src={blog.image} alt="Blog Cover" />
        <div className="py-4 px-6">
            <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
        </div>
        </div>
  </Link>  ))
  }
    </>
  );
  
};

export default BlogCard;
