import React from 'react';
import Checkbox from '../components/Checkbox';
import UserAgreement from '../components/UserAgreement';

const PrivacyContainer = () => {
  return (
    <div className="flex--container">
      <Checkbox />
      <UserAgreement />
    </div>
  );
}

export default PrivacyContainer;