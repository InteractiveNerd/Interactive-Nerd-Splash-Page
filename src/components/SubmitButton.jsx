import React, { Component } from 'react';
import '../stylesheets/Submit.css';

class Submit extends Component {
  state = {}
  render() {
    const { text } = this.props;

    return (
      <div>
        <button className="button">{text}</button>
      </div>
    );
  }
}

export default Submit;