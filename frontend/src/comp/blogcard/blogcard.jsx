import React from 'react';
import './blogCard.css'; 

const BlogCard = () => {
 
  const blogTitle = 'Using Memes as a Teaching Tool';
  const blogAuthor = 'Ain Kay';
  const publicationDate = 'January 20, 2025';
  const blogExcerpt = 'Explore how memes, when used thoughtfully, enhance learning by combining visuals and text to engage students and clarify concepts.';
  const blogImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1Lj0nLmGBBCxwQwDi8xnZqimeSlxbW7YUQ&s';

  return (
    <div className="card">
      <img src={blogImage} alt="Blog" className="card-image" />
      <h2 className="card-title">{blogTitle}</h2>
      <p className="card-author">By {blogAuthor}</p>
      <p className="card-date">{publicationDate}</p>
      <p className="card-excerpt">{blogExcerpt}</p>
    </div>
  );
};

export default BlogCard;
