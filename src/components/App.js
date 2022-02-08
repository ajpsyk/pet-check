import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import BlogArchive from './BlogArchive';
import '../styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<BlogArchive />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;