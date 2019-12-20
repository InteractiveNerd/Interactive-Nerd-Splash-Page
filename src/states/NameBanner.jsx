import React from 'react';
import Border from '../components/Border';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import Description from '../components/Description';
import NameForm from '../containers/NameForm';
import PrivacyContainer from '../containers/PrivacyContainer';

const NameBanner = () => {
  return (
    <div className="banner">
      <Border />
      <Subtitle text="Last step" />
      <Title text="Almost done!" />
      <Description text="Please enter your first & last name" />
      <form>
        <NameForm />
        <PrivacyContainer />
      </form>
    </div>
  );
}

export default NameBanner;