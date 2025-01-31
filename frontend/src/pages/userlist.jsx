import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogPostsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/user/users"
        ); // Replace with your backend endpoint
        setBlogs(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blogs.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading)
    return <p className="text-center text-lg font-medium">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Latest Blog Posts
      </h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  Author: {blog.author}
                </p>
                <p className="text-gray-600 mb-4">
                  {blog.content.substring(0, 100)}...
                </p>
              </div>
              <div className="p-4 border-t border-gray-200 flex justify-between items-center">
                <p className="text-gray-500">Likes: {blog.likes}</p>
                <p className="text-sm text-gray-400">
                  Published: {new Date(blog.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostsList;
