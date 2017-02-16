import React from 'react';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import Speakers from '../Components/Speakers';

import '../css/Components/Index';

const Index = () => (
  <div className="Index">
    <Hero />
    <div className="Index-section">
      <Speakers />
    </div>
    <div className="Index-section">
      <Footer />
    </div>
  </div>
);

export default Index;
