import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/SubSectionTitle';

const SubSectionTitle = ({ children, alternate, edge, italic }) => {
  const className = classNames({
    SubSectionTitle: true,
    'SubSectionTitle--alternate': alternate,
    'SubSectionTitle--edge': edge,
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
  edge: PropTypes.bool,
  italic: PropTypes.bool,
};

SubSectionTitle.defaultProps = {
  alternate: false,
  edge: false,
  italic: false,
};

export default SubSectionTitle;
