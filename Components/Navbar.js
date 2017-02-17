import React, { Component } from 'react';
import Burger from './Burger';
import Caption from './Caption';
import OverlayMenu from './OverlayMenu';

import '../css/Components/Navbar';
import MirrorLogo from '../images/logo.svg';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = { overlayOpen: false };
  }

  toggleOverlayMenu = () => {
    this.setState({ overlayOpen: !this.state.overlayOpen });
  }

  renderLinks() {
    return [
      <a className="Navbar-link"><Caption>Venue</Caption></a>,
      <a className="Navbar-link"><Caption>Speakers</Caption></a>,
      <a className="Navbar-link"><Caption>Workshops</Caption></a>,
      <a className="Navbar-link"><Caption>Sponsor Us</Caption></a>,
      <a className="Navbar-cta">Buy Ticket</a>
    ];
  }

  render() {
    const { overlayOpen } = this.state;

    return <div className="Navbar">
      <img src={MirrorLogo} className="Navbar-logo"/>

      <div className="Navbar-links">
        {this.renderLinks()}
      </div>

      <OverlayMenu isOpen={overlayOpen}>
        {this.renderLinks()}
        <Caption>+351 916 748 994</Caption>
        <Caption>hello@mirrorconf.com</Caption>
      </OverlayMenu>

      <Burger
        openLabel="Menu"
        closeLabel="Close"
        onClick={this.toggleOverlayMenu}/>
    </div>
  }
}
