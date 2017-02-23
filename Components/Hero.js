import React from 'react';

import '../css/Components/Hero';

import Section from './Section';
import SubSectionTitle from './SubSectionTitle';
import Mirrored from './Mirrored';

import PlayIcon from '../images/play.svg';
import TwitterLogo from '../images/twitter.svg';
import YoutubeLogo from '../images/youtube.svg';
import FacebookLogo from '../images/facebook.svg';

const Hero = () => (
  <section className="Hero">
    <div className="Hero-background" />

    <Section>
      <div className="Hero-foreground">
        <div className="Hero-content">
          <div className="Hero-title">
            <h1 className="Hero-headline">Mirror Conf 2.0</h1>
            <h2 className="Hero-uvp">
              For designers and front-end developers.
            </h2>
            <h3 className="Hero-date">
              22 & 23 September, 2017<br />
              Braga, Portugal
            </h3>
          </div>

          <div className="Hero-actions">
            <Mirrored id="button" hover>
              <a href="https://www.youtube.com/watch?v=JWa0PMXN7ZE" className="Hero-playButton">
                <img src={PlayIcon} alt="Play icon" className="Hero-playButtonImage" />
                <div className="Hero-playButtonLabel">
                  <SubSectionTitle>
                    1st edition<br />
                    best of
                  </SubSectionTitle>
                </div>
              </a>
            </Mirrored>
          </div>
        </div>

        <div className="Hero-footer">
          <a href="https://www.facebook.com/Mirror-Conf-578187519024917/" target="blank" className="Hero-socialLink">
            <img src={FacebookLogo} alt="Facebook logo" />
          </a>
          <a href="https://twitter.com/MirrorConf" target="blank" className="Hero-socialLink">
            <img src={TwitterLogo} alt="Twitter logo" />
          </a>
          <a href="https://www.youtube.com/channel/UCDez53TT1_v3jr3lGv-QhKw" target="blank" className="Hero-socialLink">
            <img src={YoutubeLogo} alt="Youtube logo" />
          </a>
          <SubSectionTitle alternate>Follow us</SubSectionTitle>
        </div>
      </div>
    </Section>
  </section>
);

export default Hero;
