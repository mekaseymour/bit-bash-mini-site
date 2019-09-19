import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
  Switch
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import activeGameImage from "./game-screenshot-compressor.png";
import wonGameImage from "./game-won-compressor.png";
import appStoreIcon from "./app-store-icon.svg";

import PrivacyPolicy from "./PrivacyPolicy";

const MAX_WIDTH_FOR_SMALL_SCREEN_SIZE = 768;

const getWindowWidth = () => window.innerWidth;

const Index = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const handleWindowResize = () => {
    setWindowWidth(getWindowWidth());
  };

  return (
    <div style={container}>
      <h1 style={header(windowWidth)}>Bi+ B×sh</h1>
      <h3 style={subHeader(windowWidth)}>Put your mental math to the test</h3>
      <div style={screenshotsContainer(windowWidth)}>
        <img style={screenshot(windowWidth)} src={activeGameImage} />
        <img style={screenshot(windowWidth)} src={wonGameImage} />
      </div>
      <img style={appleIcon(windowWidth)} src={appStoreIcon} />
      <div style={footer(windowWidth)}>
        <Link style={link} to="/privacy/">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/*" exact component={PrivacyPolicy} />
    </Switch>
  </Router>
);

const appleIcon = windowWidth => ({
  marginBottom: "20px",
  marginTop: windowWidth > MAX_WIDTH_FOR_SMALL_SCREEN_SIZE ? "40px" : 0
});

const container = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#4681FF",
  minHeight: "100vh",
  height: "100%",
  alignItems: "center",
  padding: "20px",
  position: "relative"
};

const footer = windowWidth => ({
  display: "flex",
  fontFamily: "Bungee",
  flexDirection: "row",
  fontSize: "12px",
  position: "absolute",
  bottom: 0,
  marginBottom: "20px",
  justifyContent: "center"
});

const header = windowWidth => ({
  fontFamily: "Bungee Shade",
  fontSize: windowWidth > MAX_WIDTH_FOR_SMALL_SCREEN_SIZE ? "60px" : "40px"
});

const link = {
  color: "black"
};

const screenshotsContainer = windowWidth => ({
  display: "flex",
  flexDirection:
    windowWidth > MAX_WIDTH_FOR_SMALL_SCREEN_SIZE ? "row" : "column",
  margin: "50px 0 0 0"
});

const screenshot = windowWidth => ({
  height: windowWidth > MAX_WIDTH_FOR_SMALL_SCREEN_SIZE ? "600px" : "auto",
  width: windowWidth > MAX_WIDTH_FOR_SMALL_SCREEN_SIZE ? "auto" : "200px",
  margin: "0 20px",
  marginBottom: windowWidth > MAX_WIDTH_FOR_SMALL_SCREEN_SIZE ? 0 : "20px"
});

const subHeader = windowWidth => ({
  fontFamily: "Bungee",
  fontSize: windowWidth > MAX_WIDTH_FOR_SMALL_SCREEN_SIZE ? "18px" : "16px",
  margin: 0
});

export default App;
