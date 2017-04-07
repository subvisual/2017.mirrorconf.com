import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/Link';

const Link = ({ children, href, noHover, uppercase, target }) => {
  const className = classNames('Link', {
    'Link--uppercase': uppercase,
    'Link--noHover': noHover,
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
};

Link.defaultProps = {
  noHover: false,
  uppercase: false,
  target: '',
};

export default Link;
