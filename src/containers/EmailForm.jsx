import React from 'react';
import EmailField from '../components/EmailField';
import SubmitButton from '../components/SubmitButton';

const EmailForm = () => {
  return (
    <div className="flex--container form--space">
      <EmailField />
      <SubmitButton />
    </div>
  );
}

export default EmailForm;