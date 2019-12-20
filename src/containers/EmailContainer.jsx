import React from 'react';
import Border from '../components/Border';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import EmailForm from './EmailForm';
import Description from '../components/Description';

const EmailContainer = () => {
  return (
    <div className="intro--container">
      <Border />
      <Subtitle text="Sign Up" />
      <Title text="Join our mailing list" />
      <Description />
      <EmailForm />
    </div>
  );
}

export default EmailContainer;