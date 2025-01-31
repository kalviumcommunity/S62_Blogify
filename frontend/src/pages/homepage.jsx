import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-black text-center">
      <h1 className="text-6xl font-extrabold text-white mb-6 tracking-wide drop-shadow-lg">
        Blogify
      </h1>
      <p className="text-lg text-gray-300 mb-8 max-w-md">
        Share your thoughts. Inspire the world. Unleash your creativity.
      </p>
      <button
        onClick={() => navigate("/blogs")}
        className="bg-purple-600 hover:bg-purple-800 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
      >
        Get Started 🚀
      </button>
    </div>
  );
}

export default HomePage;
