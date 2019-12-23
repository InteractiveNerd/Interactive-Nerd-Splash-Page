import React, { Component } from 'react';
import EmailContainer from '../containers/EmailContainer';
import PrivacyContainer from '../containers/PrivacyContainer';

class EmailBanner extends Component {
  render() {
    const { nextStep, values, handleChange } = this.props;
    const props = { nextStep, values, handleChange };
    return (
      <div className="banner">
        <EmailContainer {...props} />
        <PrivacyContainer />
      </div>
    );
  }
}

export default EmailBanner;