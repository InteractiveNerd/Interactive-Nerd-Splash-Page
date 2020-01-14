import React, { Component } from 'react';
import NameField from '../components/NameField';
import Submit from '../components/SubmitButton';

class NameForm extends Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="flex--container form--space">
        <NameField
          placeholder="First Name"
          required={true}
          type="firstName"
          id="firstName"
          name="firstName"
          handleChange={handleChange}
          inputValue={values.firstName}

        />
        <NameField
          placeholder="Last Name"
          required={true}
          type="lastName"
          id="lastName"
          name="lastName"
          handleChange={handleChange}
          inputValue={values.lastName}
        />
        <Submit text="Join" />
      </div>
    );
  }
}

export default NameForm;