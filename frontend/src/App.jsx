import { useState } from 'react';
import React from 'react';
import HomePage from "./pages/homepage"
import BlogPostList from './pages/bloglist';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import BlogCard from './comp/blogcard/blogcard';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/blogs" element={<BlogCard/>}/>
       
      </Routes>
    </Router>
  )
}

export default App;

