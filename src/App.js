import React from 'react';
import './App.css';
import Logo from './components/Logo';
import AppContainer from './containers/AppContainer';
import Footer from './containers/FooterContainer';

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on ${PORT}`);

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
