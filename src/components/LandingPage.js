import React from 'react';

import '../css/LandingPage.css';

const LandingPage = () => {
  return(
   <section id="landing-page-container" name="home">
      <div className="background-container">
        <div className="shadow"></div>
      </div>
      <div className="landing-page">
        <h1>RAFAŁ WOLNY</h1>
        <p>Junior Front-end Developer</p>
      </div>
   </section>
  );
}

export default LandingPage;