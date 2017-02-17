import React, { Component, PropTypes } from 'react';

import '../css/Components/Footer';
import '../css/Components/Grid';

import Link from './Link';
import SubSectionTitle from './SubSectionTitle';
import Text from './Text';

import FacebookLogo from '../images/facebook.svg';
import MirrorLogo from '../images/logo.svg';
import SubvisualLogo from '../images/subvisual.svg';
import TwitterLogo from '../images/twitter.svg';
import YoutubeLogo from '../images/youtube.svg';

export default class Footer extends Component {
  renderSocialLink(href, img) {
    return (
      <a href={href} className="Footer-socialLink">
        <img src={img} />
      </a>
    );
  }

  render() {
    return (
      <footer className="Footer">
        <div className="Footer-content Grid Grid--1offset">
          <div className="Footer-upper">
            <div className="Footer-entry Grid-1column">
              <div className="Footer-logo">
                <img src={MirrorLogo} />
              </div>
            </div>

            <div className="Footer-entry Grid-4column">
              <div className="Footer-sectionTitle">
                <SubSectionTitle>Find Your Way</SubSectionTitle>
              </div>

              <span className="Footer-link">
                <Link uppercase href="#">Sponsor Us</Link>
              </span>
              <span className="Footer-link">
                <Link uppercase href="#">Buy Ticket</Link>
              </span>
            </div>

            <div className="Footer-mobileSeparator"></div>

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

            <div className="Footer-mobileSeparator"></div>

            <div className="Footer-entry Grid-2column">
              <div className="Footer-sectionTitle">
                <SubSectionTitle>Follow us</SubSectionTitle>
              </div>

              <div className="Footer-socialMedia">
                {this.renderSocialLink("https://www.facebook.com/Mirror-Conf-578187519024917/", FacebookLogo)}
                {this.renderSocialLink("https://twitter.com/MirrorConf", TwitterLogo)}
                {this.renderSocialLink("https://www.youtube.com/channel/UCDez53TT1_v3jr3lGv-QhKw", YoutubeLogo)}
              </div>
            </div>
          </div>

          <div className="Footer-separator"></div>

          <div className="Footer-lower">
            <div className="Footer-sectionTitle">
              <SubSectionTitle>MirrorConf is powered by</SubSectionTitle>
            </div>

            <div>
              <img src={SubvisualLogo}/>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
