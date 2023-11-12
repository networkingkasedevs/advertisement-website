// Banner.js

import React from 'react';
import './Banner.css'; // Import the CSS file for styling

const Banner = () => {
  return (
    <div className="banner">
      {/* Add the background image */}
      {/* You can set the background image URL in the CSS file or directly inline here */}
      <div className="background-image"></div>

      {/* Centered search field */}
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-field" />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default Banner;
