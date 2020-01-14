import React from 'react';
import '../stylesheets/Logo.css'

const Logo = () => {
  return (
    <div className="logo bolded--text">
      <a href="index.html">interactive<span className="logo--emphasize">nerd</span></a>
    </div>
  );
}

export default Logo;