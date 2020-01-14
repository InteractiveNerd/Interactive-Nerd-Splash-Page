import React, { Component } from 'react';
import '../stylesheets/NameField.css';

class NameField extends Component {
  render() {
    const {
      placeholder,
      type,
      id,
      name,
      values,
      handleChange
    } = this.props;

    return (
      <div>
        <input
          className="input--field name--field field--space"
          required={true}
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          onChange={handleChange}
          inputValue={values}
        />
      </div>
    );
  }
}

export default NameField;