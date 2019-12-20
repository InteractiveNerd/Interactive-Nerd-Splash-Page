import React from 'react';
import IntroButton from '../components/IntroButton';
import IntroContainer from '../containers/IntroContainer';

const IntroBanner = () => {
  return (
    <div className="banner">
      <IntroContainer />
      <IntroButton />
    </div>
  );
}

export default IntroBanner;