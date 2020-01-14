import React, { Component } from 'react';
import '../stylesheets/Introduction.css';

class Introduction extends Component {
  render() {
    return (
      <div className="introduction regular--text">
        <p>Interactive Nerd is an online platform that creates animated and fully-interactive learning resources in web development.</p>
        <p>Join our mailing list to get notified of our upcoming soft launch & weekly web development news, tips, and tricks.</p>
      </div>
    );
  }
}

export default Introduction;