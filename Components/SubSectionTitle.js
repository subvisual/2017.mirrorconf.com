import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/SubSectionTitle';

const SubSectionTitle = ({ children, italic, alternate }) => {
  const className = classNames({
    SubSectionTitle: true,
    'SubSectionTitle--italic': italic,
    'SubSectionTitle--alternate': alternate,
  });

  return (
    <h3 className={className}>
      {children}
    </h3>
  );
};

SubSectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  italic: PropTypes.bool,
  alternate: PropTypes.bool,
};

SubSectionTitle.defaultProps = {
  italic: false,
  alternate: false,
};

export default SubSectionTitle;
