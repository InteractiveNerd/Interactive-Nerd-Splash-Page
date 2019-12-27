import React from 'react';
import TimerTitle from '../components/TimerTitle';
import TimerContainer from '../containers/TimerContainer';

const SideContainer = () => {
  return (
    <div>
      <TimerTitle />
      <TimerContainer />
    </div>
  );
}

export default SideContainer;