import React from 'react';

import About from '../Components/About';
import CFP from '../Components/CFP';
import Hero from '../Components/Hero';
import Feedback from '../Components/Feedback';
import Footer from '../Components/Footer';
import Speakers from '../Components/Speakers';
import Workshops from '../Components/Workshops';

import '../css/Components/Index';

const Index = () => (
  <div className="Index">
    <Hero />
    <div className="Index-section">
      <About />
      <Feedback />
    </div>
    <div className="Index-section">
      <Speakers />
      <CFP />
    </div>
    <div className="Index-section">
      <Workshops />
    </div>
    <div className="Index-section">
      <Footer />
    </div>
  </div>
);

export default Index;
