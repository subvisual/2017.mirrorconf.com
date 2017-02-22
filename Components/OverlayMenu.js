import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/OverlayMenu';

const OverlayMenu = ({ children, isOpen }) => {
  const className = classNames({
    OverlayMenu: true,
    'is-open': isOpen,
  });

  return (
    <div className={className}>
      <div className="OverlayMenu-content">
        {children}
      </div>
    </div>
  );
};

OverlayMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default OverlayMenu;
