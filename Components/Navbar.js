import React, { Component } from 'react';
import Burger from './Burger';
import Caption from './Caption';
import OverlayMenu from './OverlayMenu';

import Section from './Section';
import '../css/Components/Navbar';
import MirrorLogo from '../images/logo.svg';

const LINKS = [
  <a key="1" className="Navbar-link"><Caption>Venue</Caption></a>,
  <a key="2" className="Navbar-link"><Caption>Speakers</Caption></a>,
  <a key="3" className="Navbar-link"><Caption>Workshops</Caption></a>,
  <a key="4" className="Navbar-link"><Caption>Sponsor Us</Caption></a>,
  <a key="5" className="Navbar-cta">Buy Ticket</a>,
];

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = { overlayOpen: false };
  }

  toggleOverlayMenu = () => {
    this.setState({ overlayOpen: !this.state.overlayOpen });
  }

  render() {
    const { overlayOpen } = this.state;

    return (
      <Section>
        <div className="Navbar">
          <img src={MirrorLogo} alt="Mirror Logo" className="Navbar-logo" />

          <div className="Navbar-links">
            {LINKS}
          </div>

          <OverlayMenu isOpen={overlayOpen}>
            {LINKS}
            <Caption>+351 916 748 994</Caption>
            <Caption>hello@mirrorconf.com</Caption>
          </OverlayMenu>

          <Burger
            openLabel="Menu"
            closeLabel="Close"
            onClick={this.toggleOverlayMenu}
          />
        </div>
      </Section>
    );
  }
}
