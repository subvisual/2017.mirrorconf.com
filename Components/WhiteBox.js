import React, { PropTypes } from 'react';

import '../css/Components/WhiteBox';

const WhiteBox = ({ children }) => (
  <div className="WhiteBox">
    {children}
  </div>
);

WhiteBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WhiteBox;
