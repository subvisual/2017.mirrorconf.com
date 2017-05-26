import React from 'react';

import About from '../Components/About';
import Hero from '../Components/Hero';
import Feedback from '../Components/Feedback';
import Footer from '../Components/Footer';
import Speakers from '../Components/Speakers';
import Workshops from '../Components/Workshops';
import Sponsors from '../Components/Sponsors';

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
    </div>
    <div className="Index-section">
      <Workshops />
    </div>
    <div className="Index-section">
      <Sponsors />
    </div>
    <div className="Index-section">
      <Footer />
    </div>
  </div>
);

export default Index;
