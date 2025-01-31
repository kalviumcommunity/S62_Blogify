import React, { useState } from "react";
import BlogCard from "../comp/blogcard/blogcard.jsx";

const BlogPostList = () => {
  // State to manage list of blog posts
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "10 Tips for Remote Writers",
      content: "Discover how to improve your writing while working remotely.",
      category: "Writing",
      likes: 15,
    },
    {
      id: 2,
      title: "The Art of Storytelling",
      content: "Learn how to captivate readers with powerful narratives.",
      category: "Storytelling",
      likes: 25,
    },
    {
      id: 3,
      title: "How to Monetize Your Blog",
      content: "Explore strategies to turn your blog into a source of income.",
      category: "Blogging",
      likes: 8,
    },
  ]);

  // Function to handle likes
  const handleLike = (id) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
      )
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Blogify - Explore Amazing Blogs
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            content={blog.content}
            category={blog.category}
            likes={blog.likes}
            onLike={() => handleLike(blog.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;
