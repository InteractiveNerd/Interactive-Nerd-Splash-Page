import React, { Component } from 'react';
import EmailContainer from '../containers/EmailContainer';
import PrivacyContainer from '../containers/PrivacyContainer';

class EmailBanner extends Component {
  continue = e => {
    e.preventDefault();
    const { nextStep } = this.props;
    nextStep();
  }

  render() {
    const { currentStep, values, handleChange } = this.props;
    if (currentStep !== 2) {
      return null
    }

    return (
      <div className="banner">
        <form onSubmit={this.continue}>
          <EmailContainer
            handleChange={handleChange}
            values={values}
          />
        </form>
        <PrivacyContainer />
      </div>
    );
  }
}

export default EmailBanner;