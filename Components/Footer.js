import React from 'react';

import '../css/Components/Footer';
import '../css/Components/Grid';

import Link from './Link';
import Mirrored from './Mirrored';
import SubSectionTitle from './SubSectionTitle';
import TextTitle from './TextTitle';

import FacebookLogo from '../images/facebook.svg';
import MirrorLogo from '../images/logo.svg';
import SubvisualLogo from '../images/subvisual.svg';
import TwitterLogo from '../images/twitter.svg';
import YoutubeLogo from '../images/youtube.svg';

const renderSocialLink = (href, alt, img) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="Footer-socialLink">
    <img alt={alt} src={img} />
  </a>
);

const Footer = () => (
  <footer className="Footer">
    <div className="Footer-content">
      <div className="Grid Grid--1offset">
        <div className="Grid-11column">
          <div className="Grid">
            <div className="Grid-1column">
              <div className="Footer-logo">
                <img alt="Mirror Conf logo" src={MirrorLogo} />
              </div>
            </div>
            <div className="Grid-4column">
              <div className="Footer-sectionTitle">
                <SubSectionTitle edge>Find Your Way</SubSectionTitle>
              </div>

              <span className="Footer-link">
                <Link uppercase href="/sponsoring.pdf" target="_blank">Sponsor Us</Link>
              </span>
              <span className="Footer-link">
                <Link
                  uppercase
                  target="_blank"
                  href="https://ti.to/subvisual/mirror-conf-2017"
                >
                  Buy Your Ticket
                </Link>
              </span>
            </div>

            <div className="Footer-mobileSeparator" />

            <div className="Grid-2column">
              <div className="Footer-sectionTitle">
                <SubSectionTitle edge>Contact us</SubSectionTitle>
              </div>

              <span className="Footer-link">
                <Link href="tel:+351916748994">+351 916 748 994</Link>
              </span>

              <span className="Footer-link">
                <Link href="mailto:hello@mirrorconf.com">hello@mirrorconf.com</Link>
              </span>
            </div>

            <div className="Footer-mobileSeparator" />

            <div className="Grid-2column">
              <div className="Footer-sectionTitle">
                <SubSectionTitle edge>Follow us</SubSectionTitle>
              </div>

              <div className="Footer-socialMedia">
                {renderSocialLink('https://www.facebook.com/Mirror-Conf-578187519024917/', 'Facebook Logo', FacebookLogo)}
                {renderSocialLink('https://twitter.com/MirrorConf', 'Twitter Logo', TwitterLogo)}
                {renderSocialLink('https://www.youtube.com/channel/UCDez53TT1_v3jr3lGv-QhKw', 'Youtube Logo', YoutubeLogo)}
              </div>
            </div>
          </div>
        </div>

        <div className="Footer-separator" />
        <div className="Grid-11column">
          <div className="Footer-sectionTitle">
            <TextTitle>MirrorConf is powered by</TextTitle>
          </div>

          <Mirrored id="subvisual-logo" hide>
            <a href="https://subvisual.co" rel="noopener noreferrer" target="_blank">
              <img alt="Subvisual logo" src={SubvisualLogo} />
            </a>
          </Mirrored>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
