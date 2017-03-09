import React, { PropTypes } from 'react';

import Text from './Text';

import '../css/Components/DropcapText';

const DropcapText = ({ children }) => (
  <div className="DropcapText">
    <Text>
      {children}
    </Text>
  </div>
);

DropcapText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DropcapText;
