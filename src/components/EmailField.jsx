import React, { Component } from 'react';
import '../stylesheets/EmailField.css';

class EmailField extends Component {
  render() {
    return (
      <div>
        <input
          className="input--field email--field"
          placeholder="Your email address"
          required={true}
          type="email"
          id="email"
          name="email"
        />
      </div>
    );
  }
}

export default EmailField;