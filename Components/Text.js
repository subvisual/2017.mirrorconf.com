import React, { PropTypes } from 'react';

import '../css/Components/Text';

const Text = ({ children }) => (
  <p className="Text">
    {children}
  </p>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
