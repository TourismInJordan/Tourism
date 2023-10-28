import React, { useState,useEffect } from 'react';
import axios from 'axios';

// const BlogsForm = ({ user }) => {
//   const [formData, setFormData] = useState({
//     title:'',
//     image: '',
//     description: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newBlog = {
//       title: formData.title,
//       image: formData.image,
//       description: formData.description
//     };

//     axios.post('http://localhost:3001/blogs', newBlog)
//       .then(response => {
//         console.log('New blog added:', response.data);
//         setFormData({
//           title: '',
//           image: '',
//           description: ''
//         });
//       })
//       .catch(error => {
//         console.error('Error adding blog:', error);
//       });

//       const [blogs, setBlogs] = useState([]);
//         useEffect(() => {
//         axios.get('http://localhost:3001/blogs')
//           .then(response => setBlogs(response.data))
//           .catch(error => console.error('Error fetching blogs:', error));
//       }, []);
      
//   };
const BlogsForm = ({ user }) => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    description: '',
  });

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      title: formData.title,
      image: formData.image,
      description: formData.description
    };

    axios.post('http://localhost:3001/blogs', newBlog)
      .then(response => {
        console.log('New blog added:', response.data);
        setFormData({
          title: '',
          image: '',
          description: ''
        });
      })
      .catch(error => {
        console.error('Error adding blog:', error);
      });
  };

 

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md mt-10">
      {user && (
        <h1 className="text-center text-xl mb-4">Welcome, {user.firstName}!</h1>
      )}
      <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            required
          />
        </div>
        <div className="flex items-center justify-end">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogsForm;
