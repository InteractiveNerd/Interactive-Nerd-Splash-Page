import React from 'react';
import TimerTitle from '../components/TimerTitle';
import TimerContainer from '../containers/TimerContainer';

const SideContainer = () => {
  return (
    <div className="side--container">
      <TimerTitle />
      <TimerContainer />
    </div>
  );
}

export default SideContainer;