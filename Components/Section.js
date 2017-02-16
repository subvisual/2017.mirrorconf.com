import React, { PropTypes } from 'react';

import '../css/Components/Section';

const Section = ({ children }) => (
  <div className="Section">
    <div className="Section-content">
      {children}
    </div>
  </div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
