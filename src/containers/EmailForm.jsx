import React, { Component } from 'react';
import EmailField from '../components/EmailField';
import SubmitButton from '../components/SubmitButton';

class EmailForm extends Component {
  render() {
    const { values, handleChange } = this.props;
    const props = { values, handleChange };
    return (
      <div className="flex--container form--space">
        <EmailField {...props} />
        <SubmitButton />
      </div>
    );
  }
}

export default EmailForm;