import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import '../css/reset';
import '../css/markdown-styles';
import '../css/Components/Layout';

import Links from '../data/links';
import Link from '../Components/Link';
import Navbar from '../Components/Navbar';
import Mirror from '../Components/Mirror';
import OverlayMenu from '../Components/OverlayMenu';

const renderLink = link => <span className="OverlayMenu-link">{link}</span>;

export default class Template extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { overlayOpen: false };
  }

  toggleOverlayMenu = () =>
    this.setState({ overlayOpen: !this.state.overlayOpen });

  render() {
    const { children } = this.props;
    const { overlayOpen } = this.state;

    const className = classNames({
      'Layout': true,
      'Layout--overlayOpen': overlayOpen,
    });

    return (
      <div className={className}>
        <OverlayMenu isOpen={overlayOpen} onClose={this.toggleOverlayMenu}>
          {Links.map(renderLink)}
          <Link href="tel:+351 916 748 994">+351 916 748 994</Link>
          <Link href="mailto:hello@mirrorconf.com">hello@mirrorconf.com</Link>
        </OverlayMenu>

        <Mirror>
          <nav className="Layout-navbar">
            <Navbar
              overlayOpen={overlayOpen}
              toggleOverlayMenu={this.toggleOverlayMenu}
            />
          </nav>

          <div className="Layout-content">
            {children}
          </div>
        </Mirror>
      </div>
    );
  }
}
