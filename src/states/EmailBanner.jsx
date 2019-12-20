import React from 'react';
import EmailContainer from '../containers/EmailContainer';
import PrivacyContainer from '../containers/PrivacyContainer';

const EmailBanner = () => {
  return (
    <div className="banner">
      <EmailContainer />
      <PrivacyContainer />
    </div>
  );
}

export default EmailBanner;