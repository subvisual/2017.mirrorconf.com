import React, { PropTypes } from 'react';

import '../css/Components/Caption';

const Caption = ({ children }) => (
  <p className="Caption">
    {children}
  </p>
);

Caption.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Caption;
