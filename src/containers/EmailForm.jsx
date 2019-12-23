import React, { Component } from 'react';
import EmailField from '../components/EmailField';
import SubmitButton from '../components/SubmitButton';

class EmailForm extends Component {
  continue = e => {
    e.preventDefault();
    const { nextStep } = this.props;
    nextStep();
  }

  render() {
    const { nextStep, values, handleChange } = this.props;
    const props = { nextStep, values, handleChange }

    return (
      <div>
        <form
          onSubmit={this.continue}
          className="flex--container form--space"
        >
          <EmailField {...props} />
          <SubmitButton />
        </form>
      </div>
    );
  }
}

export default EmailForm;