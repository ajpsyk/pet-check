import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import BlogArchive from './BlogArchive';
import BlogPost from './BlogPost';
import '../styles/App.css';

const App = () => {

  const [blogPost, setBlogPost] = useState(null);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<BlogArchive setBlogPost={setBlogPost}/>} />
          <Route path="/post/:id" element={<BlogPost post={blogPost}/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;