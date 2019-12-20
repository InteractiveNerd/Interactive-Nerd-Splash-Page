import React from 'react';
import Border from '../components/Border';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import Introduction from '../components/Introduction';
import Description from '../components/Description';
import IntroButton from '../components/IntroButton';
import '../stylesheets/IntroContainer.css';

const IntroContainer = () => {
  return (
    <div className="intro--container">
      <Border />
      <Subtitle />
      <Title />
      <Introduction />
      <Description />
      <IntroButton />
    </div>
  );
}

export default IntroContainer;