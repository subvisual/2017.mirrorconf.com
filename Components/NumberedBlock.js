import React, { PropTypes } from 'react';

import '../css/Components/NumberedBlock';
import TextHighlight from './TextHighlight';

const NumberedBlock = ({ children, number }) => (
  <div className="NumberedBlock">
    <span className="NumberedBlock-number">
      <TextHighlight>{number}</TextHighlight>
    </span>
    <div className="NumberedBlock-block">{children}</div>
  </div>
);

NumberedBlock.propTypes = {
  children: PropTypes.node.isRequired,
  number: PropTypes.string.isRequired,
};

export default NumberedBlock;
