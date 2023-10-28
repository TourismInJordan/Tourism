import React from 'react';

const BlogsDetails = ({ match, blogs }) => {
  // Get the blog id from the URL params
  const blogId = parseInt(match.params.id);

  // Find the blog post with the matching id
  const blog = blogs.find(blog => blog.id === blogId);
    console.log(blogId);
  // If no matching blog is found, you can handle this case accordingly
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto mt-8  flex flex-col justify-center min-h-[55rem]">
      <img src={blog.image} alt={blog.title} className="mx-auto rounded-lg mb-4" style={{ maxWidth: '600px' }} />
      <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-700 mb-4">{blog.description}</p>
    </div>
  );
};

export default BlogsDetails;
