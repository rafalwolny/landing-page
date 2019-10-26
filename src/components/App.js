import React from 'react';

import LandingPage from './LandingPage';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Portoflio from './Portfolio';
import Contact from './Contact';
import '../css/App.css';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <LandingPage />
      <AboutMe />
      <Portoflio />
      <Contact />
    </div>
  );
}

export default App;