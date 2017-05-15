import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/Link';

const Link = ({ children, href, noHover, uppercase, target, isActive, alternateFont }) => {
  const className = classNames('Link', {
    'is-active': isActive,
    'Link--uppercase': uppercase,
    'Link--noHover': noHover,
    'Link--alternateFont': alternateFont,
  });

  return (
    <a className={className} href={href} target={target}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  noHover: PropTypes.bool,
  uppercase: PropTypes.bool,
  target: PropTypes.string,
  isActive: PropTypes.bool,
  alternateFont: PropTypes.bool,
};

Link.defaultProps = {
  noHover: false,
  uppercase: false,
  target: '',
  isActive: false,
  alternateFont: false,
};

export default Link;
