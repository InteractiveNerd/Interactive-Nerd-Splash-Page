import React from 'react';
import '../stylesheets/SocialContainer.css';

const SocialContainer = () => {
  return (
    <div className="flex--container social--container">
      <a href="index.html">
        <i class="fab fa-twitter fa-lg"></i>
      </a>
      <a href="index.html">
        <i class="fab fa-instagram fa-lg"></i>
      </a>
      <a href="index.html">
        <i class="fab fa-facebook-square fa-lg"></i>
      </a>
      <a href="index.html">
        <i class="fab fa-linkedin fa-lg"></i>
      </a>
    </div>
  );
}

export default SocialContainer;