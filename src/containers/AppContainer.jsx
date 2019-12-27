import React from 'react';
import SideContainer from './SideContainer';
import SignUpContainer from './SignupContainer';

const AppContainer = () => {
  return (
    <div className="flex--container">
      <SideContainer />
      <SignUpContainer />
    </div>
  );
}

export default AppContainer;