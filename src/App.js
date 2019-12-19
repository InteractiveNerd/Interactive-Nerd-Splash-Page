import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Timer from './components/Timer';
import TimerSubtitle from './components/TimerSubtitle';
import TimerTitle from './components/TimerTitle';

function App() {
  return (
    <div className="App">
      <Logo />
      <TimerTitle />
      <Timer />
      <TimerSubtitle />
    </div>
  );
}

export default App;
