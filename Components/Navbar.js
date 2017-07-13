import React, { PropTypes, cloneElement } from 'react';
import Burger from './Burger';
import Section from './Section';
import Link from './Link';

import Links from '../data/links';
import '../css/Components/Navbar';
import MirrorLogo from '../images/logo.svg';

const renderLink = currentRoute => (link, index) => {
  const linkElement = cloneElement(link, {
    isActive: currentRoute === link.attributes.href,
  });

  return (
    <span key={index} className="Navbar-link">
      {linkElement}
    </span>
  );
};

const Navbar = ({ overlayOpen, toggleOverlayMenu, currentRoute }) =>
  <Section>
    <div className="Navbar">
      <Link noHover href="/">
        <img src={MirrorLogo} alt="Mirror Logo" className="Navbar-logo" />
      </Link>

      <div className="Navbar-links">
        {Links.map(renderLink(currentRoute))}
      </div>

      <Burger
        openLabel="Menu"
        closeLabel="Close"
        isOpen={overlayOpen}
        onClick={toggleOverlayMenu}
      />
    </div>
  </Section>;

Navbar.propTypes = {
  currentRoute: PropTypes.string,
  overlayOpen: PropTypes.bool.isRequired,
  toggleOverlayMenu: PropTypes.func.isRequired,
};

export default Navbar;
