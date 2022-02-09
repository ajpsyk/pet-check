import React from 'react';
import { blogData } from './BlogData';
import BlogPosts from './BlogPost';
import '../styles/BlogArchive.css';

const BlogArchive = () => {
  return (
    <div className="blog-archive">
      <h2 className="archive-head">Recent Posts</h2>
      <ul className="archive-items">
      {blogData.map((post, index) => {
        return (
          <li className="archive-post"key={index}>
            <img className="archive-post-image"src={post.image}></img>
            <h3 className="archive-post-title">{post.title}</h3>
          </li>
        )
      })}
      </ul>
    </div>
  );
}

export default BlogArchive;