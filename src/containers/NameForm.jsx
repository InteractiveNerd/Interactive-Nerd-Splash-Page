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
          type="firstName"
          id="firstName"
          name="firstName"
          handleChange={handleChange('firstName')}
          values={values.firstName}

        />
        <NameField
          placeholder="Last Name"
          type="lastName"
          id="lastName"
          name="lastName"
          handleChange={handleChange('lastName')}
          values={values.lastName}

        />
        <Submit text="Join" />
      </div>
    );
  }
}

export default NameForm;