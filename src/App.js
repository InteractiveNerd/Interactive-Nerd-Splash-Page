import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Divider from './components/Divider';
import FooterTitle from './components/FooterTitle';
import FooterSubtitle from './components/FooterSubtitle';
import AppContainer from './containers/AppContainer';

function App() {
  return (
    <div className="App">
      <Logo />
      <AppContainer />
      <Divider />
      <FooterTitle />
      <FooterSubtitle />
    </div>
  );
}

export default App;
