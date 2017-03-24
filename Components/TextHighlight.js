import React, { PropTypes } from 'react';

import '../css/Components/TextHighlight';

const TextHighlight = ({ children }) => (
  <span className="TextHighlight">{children}</span>
);

TextHighlight.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextHighlight;
