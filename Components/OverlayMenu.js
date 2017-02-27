import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Burger from './Burger';
import MirrorLogo from '../images/logo.svg';
import '../css/Components/OverlayMenu';

const OverlayMenu = ({ children, isOpen, onClose }) => {
  const className = classNames({
    OverlayMenu: true,
    'is-open': isOpen,
  });

  return (
    <div className={className}>
      <div className="OverlayMenu-header">
        <img src={MirrorLogo} alt="Mirror Logo" className="OverlayMenu-logo" />
        <Burger
          openLabel="Menu"
          closeLabel="Close"
          isOpen={isOpen}
          onClick={onClose}
        />
      </div>
      <div className="OverlayMenu-content">
        {children}
      </div>
    </div>
  );
};

OverlayMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default OverlayMenu;
