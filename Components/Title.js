import React, { PropTypes } from 'react';

import '../css/Components/Title';

const Title = ({ children }) => (
  <h1 className="Title">
    {children}
  </h1>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
