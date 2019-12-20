import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Timer from './components/Timer';
import TimerSubtitle from './components/TimerSubtitle';
import TimerTitle from './components/TimerTitle';
import Divider from './components/Divider';
import FooterTitle from './components/FooterTitle';
import FooterSubtitle from './components/FooterSubtitle';
import IntroBanner from './states/IntroBanner';
import EmailBanner from './states/EmailBanner';
import NameBanner from './states/NameBanner';
import CongratulationsBanner from './states/CongratulationsBanner';

function App() {
  return (
    <div className="App">
      <Logo />
      <TimerTitle />
      <Timer />
      <TimerSubtitle />
      <IntroBanner />
      <EmailBanner />
      <NameBanner />
      <CongratulationsBanner/>
      <Divider />
      <FooterTitle />
      <FooterSubtitle />
    </div>
  );
}

export default App;
