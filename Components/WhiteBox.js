import React, { PropTypes } from 'react';

import '../css/Components/WhiteBox';

import Mirrored from './Mirrored';

const WhiteBox = ({ children, id }) => (
  <Mirrored id={id} hide>
    <div className="WhiteBox">
      {children}
    </div>
  </Mirrored>
);

WhiteBox.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};

export default WhiteBox;
