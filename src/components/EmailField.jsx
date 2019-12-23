import React, { Component } from 'react';
import '../stylesheets/EmailField.css';

class EmailField extends Component {
  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <input
          className="input--field email--field field--space"
          placeholder="Your email address"
          required={true}
          type="email"
          id="email"
          name="email"
          onChange={handleChange('email')}
          inputValue={values.email}
        />
      </div>
    );
  }
}

export default EmailField;