import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/Link';

const Link = ({ children, href, uppercase, target }) => {
  const className = classNames('Link', {
    'Link--uppercase': uppercase,
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
  uppercase: PropTypes.bool,
  target: PropTypes.string,
};

Link.defaultProps = {
  uppercase: false,
  target: '',
};

export default Link;
