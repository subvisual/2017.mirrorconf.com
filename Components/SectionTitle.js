import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/SectionTitle';

const SectionTitle = ({ children, alternate }) => {
  const className = classNames({
    SectionTitle: true,
    'SectionTitle--alternate': alternate,
  });

  return (
    <h2 className={className}>
      {children}
    </h2>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  alternate: PropTypes.bool,
};

SectionTitle.defaultProps = {
  alternate: false,
};

export default SectionTitle;
