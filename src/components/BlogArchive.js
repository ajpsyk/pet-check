import React from 'react';
import { blogData } from './BlogData';
import BlogPosts from './BlogPost';
import { Link } from 'react-router-dom';
import '../styles/BlogArchive.css';

const BlogArchive = ({ setBlogPost }) => {
  return (
    <div className="blog-archive">
      <h2 className="archive-head">Recent Posts</h2>
      <ul className="archive-items">
      {blogData.map((post, index) => {
        return (
          <li className="archive-post"key={index}  onClick={() => setBlogPost(post)}>
            <Link to={`/post/${post.id}`}>
              <img className="archive-post-image"src={post.image}></img>
              <h3 className="archive-post-title">{post.title}</h3>
            </Link>
          </li>
        )
      })}
      </ul>
    </div>
  );
}

export default BlogArchive;