import React from 'react';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import Speakers from '../Components/Speakers';
import CFP from '../Components/CFP';

import '../css/Components/Index';

const Index = () => (
  <div className="Index">
    <Hero />
    <div className="Index-section">
      <Speakers />
      <CFP />
    </div>
    <div className="Index-section">
      <Footer />
    </div>
  </div>
);

export default Index;
