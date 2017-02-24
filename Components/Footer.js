import React from 'react';

import '../css/Components/Footer';
import '../css/Components/Grid';

import Link from './Link';
import SubSectionTitle from './SubSectionTitle';

import FacebookLogo from '../images/facebook.svg';
import MirrorLogo from '../images/logo.svg';
import SubvisualLogo from '../images/subvisual.svg';
import TwitterLogo from '../images/twitter.svg';
import YoutubeLogo from '../images/youtube.svg';

const renderSocialLink = (href, alt, img) => (
  <a href={href} className="Footer-socialLink">
    <img alt={alt} src={img} />
  </a>
);

const Footer = () => (
  <footer className="Footer">
    <div className="Footer-content Grid Grid--1offset">
      <div className="Footer-upper">
        <div className="Footer-entry Grid-1column">
          <div className="Footer-logo">
            <img alt="Mirror Conf logo" src={MirrorLogo} />
          </div>
        </div>

        <div className="Footer-entry Grid-4column">
          <div className="Footer-sectionTitle">
            <SubSectionTitle>Find Your Way</SubSectionTitle>
          </div>

          <span className="Footer-link">
            <Link uppercase href="/sponsoring.pdf" target="_blank">Sponsor Us</Link>
          </span>
          <span className="Footer-link">
            <Link uppercase href="#">Buy Ticket</Link>
          </span>
        </div>

        <div className="Footer-mobileSeparator" />

        <div className="Footer-entry Grid-2column">
          <div className="Footer-sectionTitle">
            <SubSectionTitle>Contact us</SubSectionTitle>
          </div>

          <span className="Footer-link">
            <Link href="tel:+351916748994">+351 916 748 994</Link>
          </span>

          <span className="Footer-link">
            <Link href="mailto:hello@mirrorconf.com">hello@mirrorconf.com</Link>
          </span>
        </div>

        <div className="Footer-mobileSeparator" />

        <div className="Footer-entry Grid-2column">
          <div className="Footer-sectionTitle">
            <SubSectionTitle>Follow us</SubSectionTitle>
          </div>

          <div className="Footer-socialMedia">
            {renderSocialLink('https://www.facebook.com/Mirror-Conf-578187519024917/', 'Facebook Logo', FacebookLogo)}
            {renderSocialLink('https://twitter.com/MirrorConf', 'Twitter Logo', TwitterLogo)}
            {renderSocialLink('https://www.youtube.com/channel/UCDez53TT1_v3jr3lGv-QhKw', 'Youtube Logo', YoutubeLogo)}
          </div>
        </div>
      </div>

      <div className="Footer-separator" />

      <div className="Footer-lower">
        <div className="Footer-sectionTitle">
          <SubSectionTitle>MirrorConf is powered by</SubSectionTitle>
        </div>

        <div>
          <img alt="Subvisual logo" src={SubvisualLogo} />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
