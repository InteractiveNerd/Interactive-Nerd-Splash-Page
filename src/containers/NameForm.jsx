import React from 'react';
import NameField from '../components/NameField';
import Submit from '../components/SubmitButton';

const NameForm = () => {
  return (
    <div className="flex--container form--space">
      <NameField placeholder="First Name" />
      <NameField placeholder="Last Name" />
      <Submit text="Join" />
    </div>
  );
}

export default NameForm;