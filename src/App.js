import React from 'react';
import './App.css';
import Logo from './components/Logo';
import AppContainer from './containers/AppContainer';
import Footer from './containers/FooterContainer';

function App() {
  return (
    <div className="App">
      <Logo />
      <AppContainer />
      <Footer />
    </div>
  );
}

export default App;
