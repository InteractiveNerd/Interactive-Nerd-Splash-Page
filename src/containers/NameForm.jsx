import React, { Component } from 'react';
import NameField from '../components/NameField';
import Submit from '../components/SubmitButton';

class NameForm extends Component {
  render() {
    const { firstName, lastName, handleChange } = this.props;
    return (
      <div className="flex--container form--space">
        <NameField
          placeholder="First Name"
          type="firstName"
          id="firstName"
          name="firstName"
          onChange={handleChange('firstName')}
          values={firstName}

        />
        <NameField
          placeholder="Last Name"
          type="lastName"
          id="lastName"
          name="lastName"
          onChange={handleChange('lastName')}
          values={lastName}

        />
        <Submit text="Join" />
      </div>
    );
  }
}

export default NameForm;