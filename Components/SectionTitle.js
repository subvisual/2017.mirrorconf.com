import React, { PropTypes } from 'react';

import '../css/Components/SectionTitle';

const SectionTitle = ({ children }) => (
  <h2 className="SectionTitle">
    {children}
  </h2>
);

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
