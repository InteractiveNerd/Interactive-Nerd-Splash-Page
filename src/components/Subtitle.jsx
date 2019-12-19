import React, { Component } from 'react';
import '../stylesheets/Subtitle.css';

class Subtitle extends Component {
  static defaultProps = {
    text: "introducing"
  }

  render() {
    return (
      <div className="subtitle bolded--text">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Subtitle;