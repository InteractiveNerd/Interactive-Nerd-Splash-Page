import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Timer from './components/Timer';
import TimerSubtitle from './components/TimerSubtitle';
import TimerTitle from './components/TimerTitle';
import Divider from './components/Divider';
import FooterTitle from './components/FooterTitle';
import FooterSubtitle from './components/FooterSubtitle';
import Border from './components/Border';
import Subtitle from './components/Subtitle';
import Title from './components/Title';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="App">
      <Logo />
      <TimerTitle />
      <Timer />
      <TimerSubtitle />
      <Border />
      <Subtitle />
      <Title />
      <Introduction />
      <Divider />
      <FooterTitle />
      <FooterSubtitle />
    </div>
  );
}

export default App;
