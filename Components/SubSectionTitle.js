import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/SubSectionTitle';

const SubSectionTitle = ({ children, alternate, italic }) => {
  const className = classNames({
    SubSectionTitle: true,
    'SubSectionTitle--alternate': alternate,
    'SubSectionTitle--italic': italic,
  });

  return (
    <h3 className={className}>
      {children}
    </h3>
  );
};

SubSectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  alternate: PropTypes.bool,
  italic: PropTypes.bool,
};

SubSectionTitle.defaultProps = {
  alternate: false,
  italic: false,
};

export default SubSectionTitle;
