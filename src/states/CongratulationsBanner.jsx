import React from 'react';
import Border from '../components/Border';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import Description from '../components/Description';
import SocialContainer from '../containers/SocialContainer';

const CongratulationsBanner = () => {
  return (
    <div className="banner">
      <Border />
      <Subtitle text="Congratulations" />
      <Title text="You're onboard!" />
      <Description text="Thanks for signing up. Look out for the latest weekly web development news, tips, and tricks in your inbox." />
      <SocialContainer />
    </div>
  );
}

export default CongratulationsBanner;