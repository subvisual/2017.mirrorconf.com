import React from 'react';

import About from '../Components/About';
import CallToAction from '../Components/CallToAction';
import Hero from '../Components/Hero';
import Feedback from '../Components/Feedback';
import Footer from '../Components/Footer';
import Speakers from '../Components/Speakers';
import Workshops from '../Components/Workshops';
import Sponsors from '../Components/Sponsors';
import Mirror from '../Components/Mirror';

import '../css/Components/Index';

const Index = () => (
  <div className="Index">
    <Hero />
    <div className="Index-section">
      <Mirror>
        <About />
      </Mirror>
      <Feedback />
    </div>
    <div className="Index-section">
      <Mirror>
        <Speakers />
      </Mirror>

      <CallToAction
        title="Want to be part of this amazing lineup?"
        text="Call for proposals is open until May 20th"
        href="https://www.papercall.io/mirrorconf2017"
        buttonText="SUBMIT A TALK"
      />

    </div>
    <div className="Index-section">
      <Mirror>
        <Workshops />
      </Mirror>
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
