import React, { Component } from 'react';
import '../stylesheets/Title.css';

class Title extends Component {
  static defaultProps = {
    text: "Interactive Nerd"
  }

  render() {
    return (
      <div className="title bolded--text">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Title;