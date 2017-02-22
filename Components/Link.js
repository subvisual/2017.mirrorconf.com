import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/Link';

const Link = ({ children, href, uppercase }) => {
  const className = classNames('Link', {
    'Link--uppercase': uppercase,
  });

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  uppercase: PropTypes.bool,
};

Link.defaultProps = {
  uppercase: false,
};

export default Link;
