import React from 'react';

import About from '../Components/About';
import CFP from '../Components/CFP';
import Hero from '../Components/Hero';
import Feedback from '../Components/Feedback';
import Footer from '../Components/Footer';
import Speakers from '../Components/Speakers';

import '../css/Components/Index';

const Index = () => (
  <div className="Index">
    <Hero />
    <div className="Index-section">
      <About />
      <Feedback />
      <Speakers />
      <CFP />
    </div>
    <div className="Index-section">
      <Footer />
    </div>
  </div>
);

export default Index;
