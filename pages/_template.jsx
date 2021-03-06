import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import '../css/reset';
import '../css/markdown-styles';
import '../css/Components/Layout';

import Links from '../data/links';
import Link from '../Components/Link';
import Navbar from '../Components/Navbar';
import OverlayMenu from '../Components/OverlayMenu';
import AwwwardsRibbon from '../Components/AwwwardsRibbon';

import MouseAnimator from '../Components/MouseAnimator';

const renderLink = (link, index) => <span key={index} className="OverlayMenu-link">{link}</span>;

export default class Template extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { overlayOpen: false };
  }

  componentDidMount() {
    this.mouseAnimator = new MouseAnimator();
    this.mouseAnimator.hook();
  }

  toggleOverlayMenu = () =>
    this.setState({ overlayOpen: !this.state.overlayOpen });

  renderCut() {
    if (['/', '/location/'].indexOf(this.props.location.pathname) == -1) {
      return null;
    }

    return <div className="Layout-cut" />;
  }

  render() {
    const { children } = this.props;
    const { overlayOpen } = this.state;

    const className = classNames({
      'Layout': true,
      'Layout--overlayOpen': overlayOpen,
    });

    return (
      <div>
        <div className={className}>
          <OverlayMenu isOpen={overlayOpen} onClose={this.toggleOverlayMenu}>
            {Links.map(renderLink)}
            <Link href="tel:+351 916 748 994">+351 916 748 994</Link>
            <Link href="mailto:hello@mirrorconf.com">hello@mirrorconf.com</Link>
          </OverlayMenu>

          {this.renderCut()}
          <nav className="Layout-navbar">
            <Navbar
              currentRoute={this.props.location.pathname}
              overlayOpen={overlayOpen}
              toggleOverlayMenu={this.toggleOverlayMenu}
            />
          </nav>

          <div className="Layout-content">
            {children}
          </div>
        </div>
        <AwwwardsRibbon />
      </div>
    );
  }
}
