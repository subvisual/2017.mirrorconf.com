import React, { Component } from 'react';
import Burger from './Burger';
import Caption from './Caption';
import OverlayMenu from './OverlayMenu';

import Button from './Button';
import Section from './Section';
import '../css/Components/Navbar';
import MirrorLogo from '../images/logo.svg';

const LINKS = [
  <a href="#" key="1" className="Navbar-link"><Caption>Venue</Caption></a>,
  <a href="#" key="2" className="Navbar-link"><Caption>Speakers</Caption></a>,
  <a href="#" key="3" className="Navbar-link"><Caption>Workshops</Caption></a>,
  <a href="#" key="4" href="/sponsoring.pdf" target="_blank" className="Navbar-link"><Caption>Sponsor Us</Caption></a>,
  <span className="Navbar-cta"><Button>Buy Ticket</Button></span>,
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
