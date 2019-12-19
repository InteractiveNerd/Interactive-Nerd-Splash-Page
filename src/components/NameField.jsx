import React, { Component } from 'react';
import '../stylesheets/NameField.css';

class NameField extends Component {
  render() {
    const {
      placeholder,
      type,
      id,
      name
    } = this.props;

    return (
      <div>
        <input
          className="input--field name--field"
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
        />
      </div>
    );
  }
}

export default NameField;