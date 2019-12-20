import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Timer from './components/Timer';
import TimerSubtitle from './components/TimerSubtitle';
import TimerTitle from './components/TimerTitle';
import Divider from './components/Divider';
import FooterTitle from './components/FooterTitle';
import FooterSubtitle from './components/FooterSubtitle';
import EmailField from './components/EmailField';
import NameField from './components/NameField';
import IntroContainer from './containers/IntroContainer';
import PrivacyContainer from './containers/PrivacyContainer';

function App() {
  return (
    <div className="App">
      <Logo />
      <TimerTitle />
      <Timer />
      <TimerSubtitle />
      <IntroContainer />
      <PrivacyContainer />
      <EmailField />
      <NameField placeholder="First Name" />
      <Divider />
      <FooterTitle />
      <FooterSubtitle />
    </div>
  );
}

export default App;
