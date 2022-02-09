import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from './BlogData';
import '../styles/BlogPost.css';

const BlogPost = ({post}) => {

  return (
    <div className="blog-post">
      <h2 className="post-title">{post.title}</h2>
      <h3 className="post-byline">Written by {post.author}</h3>
      <img className="post-image" src={post.image}></img>
      {post.content.split('\n').map((paragraph) => <p className="post-content">{paragraph}</p>)}
    </div>
  );
}

export default BlogPost;