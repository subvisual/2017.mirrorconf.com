import React, { PropTypes } from 'react';
import Burger from './Burger';
import Section from './Section';
import Mirrored from './Mirrored';
import Link from './Link';

import Links from '../data/links';
import '../css/Components/Navbar';
import MirrorLogo from '../images/logo.svg';

const renderLink = (link, index) => <span key={index} className="Navbar-link">{link}</span>;

const Navbar = ({ overlayOpen, toggleOverlayMenu }) => (
  <Section>
    <div className="Navbar">
      <Link noHover href="/">
        <img src={MirrorLogo} alt="Mirror Logo" className="Navbar-logo" />
      </Link>

      <div className="Navbar-links">
        {Links.map(renderLink)}
      </div>

      <Burger
        openLabel="Menu"
        closeLabel="Close"
        isOpen={overlayOpen}
        onClick={toggleOverlayMenu}
      />
    </div>
  </Section>
);

Navbar.propTypes = {
  overlayOpen: PropTypes.bool.isRequired,
  toggleOverlayMenu: PropTypes.func.isRequired,
};

export default Navbar;
