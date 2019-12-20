import React from 'react';
import '../stylesheets/IntroButton.css';

const IntroButton = () => {
  return (
    <div>
      <a href="index.html">
        <button className="intro--button bolded--text">Join our mailing list</button>
      </a>
    </div>
  );
}

export default IntroButton;