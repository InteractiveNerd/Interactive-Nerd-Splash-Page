import React from 'react';
import '../stylesheets/SocialContainer.css';

const SocialContainer = () => {
  return (
    <div className="flex--container social--container">
      <a href="index.html">
        <i className="fab fa-twitter fa-lg"></i>
      </a>
      <a href="index.html">
        <i className="fab fa-instagram fa-lg"></i>
      </a>
      <a href="index.html">
        <i className="fab fa-facebook-square fa-lg"></i>
      </a>
      <a href="index.html">
        <i className="fab fa-linkedin fa-lg"></i>
      </a>
    </div>
  );
}

export default SocialContainer;