import React, { Component } from 'react';
import Link from './Link';
import Burger from './Burger';
import Button from './Button';
import Section from './Section';
import OverlayMenu from './OverlayMenu';

import '../css/Components/Navbar';
import MirrorLogo from '../images/logo.svg';

const LINKS = [
  <Link uppercase key="1" href="/sponsoring.pdf" target="_blank">Sponsor Us</Link>,
  <span key="2" className="Navbar-cta">
    <Link target="_blank" href="https://ti.to/subvisual/mirror-conf-2017">
      <Button>Buy Ticket</Button>
    </Link>
  </span>,
];

const renderLink = link => <span className="Navbar-link">{link}</span>;

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
            {LINKS.map(renderLink)}
          </div>

          <OverlayMenu isOpen={overlayOpen} onClose={this.toggleOverlayMenu}>
            {LINKS.map(renderLink)}
            <Link href="tel:+351 916 748 994">+351 916 748 994</Link>
            <Link href="mailto:hello@mirrorconf.com">hello@mirrorconf.com</Link>
          </OverlayMenu>

          <Burger
            openLabel="Menu"
            closeLabel="Close"
            isOpen={overlayOpen}
            onClick={this.toggleOverlayMenu}
          />
        </div>
      </Section>
    );
  }
}
