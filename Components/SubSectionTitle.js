import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/SubSectionTitle';

const SubSectionTitle = ({ children, alternate }) => {
  const className = classNames({
    SubSectionTitle: true,
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
  alternate: PropTypes.bool,
};

SubSectionTitle.defaultProps = {
  alternate: false,
};

export default SubSectionTitle;
