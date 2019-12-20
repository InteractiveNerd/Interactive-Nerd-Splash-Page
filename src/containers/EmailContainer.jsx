import React from 'react';
import EmailField from '../components/EmailField';
import SubmitButton from '../components/SubmitButton';

const EmailContainer = () => {
  return (
    <div className="flex--container">
      <EmailField />
      <SubmitButton />
    </div>
  );
}

export default EmailContainer;