import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ title }) => {
  // Handle title safely - trim to prevent excessive length
  const safeTitle = title ? (title.length > 40 ? title.substring(0, 40) + '...' : title) : '';
  
  return (
    <div className="blog-breadcrumbs">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <span className="separator">/</span>
        </li>
        <li>
          <Link to="/#blog">Blog</Link>
        </li>
        <li>
          <span className="separator">/</span>
        </li>
        <li>
          <span className="current">{safeTitle}</span>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;