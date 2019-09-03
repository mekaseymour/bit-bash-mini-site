import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import activeGameImage from './activeGame.svg'
import wonGameImage from './wonGame.svg'

import PrivacyPolicy from './PrivacyPolicy';

const MAX_WIDTH_FOR_SMALL_SCREEN_SIZE = 768;

const getWindowWidth = () => window.innerWidth;

const Index = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const handleWindowResize = () => {
    setWindowWidth(getWindowWidth())
  }

  return (
    <div style={container}>
      <h1 style={header(windowWidth)}>Bi+ B×sh</h1>
      <h3 style={subHeader(windowWidth)}>Put your mental math to the test</h3>
      <div style={screenshotsContainer(windowWidth)}>
        <img style={screenshot(windowWidth)} src={activeGameImage} />
        <img style={screenshot(windowWidth)} src={wonGameImage} />
      </div>

      <div style={footer(windowWidth)}><Link style={link} to="/privacy/">Privacy Policy</Link></div>
    </div>
  );
}

const App = () => (
  <Router>
    <Route path="/" exact component={Index} />
  <Route path="/privacy/" component={PrivacyPolicy} />
</Router>
  )

const container = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#4681FF',
  minHeight: '100vh',
  height: '100%',
  alignItems: 'center',
  padding: '20px'
}

const footer = windowWidth => ({
  display: 'flex',
  marginTop: '30px',
  justifySelf: 'flex-end',
  width: '100%',
  fontFamily: 'Bungee',
  flexDirection: windowWidth > MAX_WIDTH_FOR_SMALL_SCREEN_SIZE ? 'row' : 'column',
  alignItems: 'center',
  fontSize: '12px',
})

const header = windowWidth => ({
  fontFamily: 'Bungee Shade',
  fontSize: windowWidth > MAX_WIDTH_FOR_SMALL_SCREEN_SIZE ? '60px' : '40px',
})

const link = {
  color: 'black',
}

const screenshotsContainer = windowWidth => ({
  display: 'flex',
  flexDirection: windowWidth > MAX_WIDTH_FOR_SMALL_SCREEN_SIZE ? 'row' : 'column',
  marginTop: '50px',
})

const screenshot = windowWidth => ({
  height: windowWidth > MAX_WIDTH_FOR_SMALL_SCREEN_SIZE ? '600px' : '500px',
})

const subHeader = windowWidth => ({
  fontFamily: 'Bungee',
  fontSize:  windowWidth > MAX_WIDTH_FOR_SMALL_SCREEN_SIZE ? '18px' : '16px',
  margin: 0,
})

export default App;
