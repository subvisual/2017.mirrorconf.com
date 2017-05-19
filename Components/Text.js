import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/Text';

const Text = ({ children, alternative, preLineBreak }) => {
  const className = classNames({
    Text: true,
    'Text--alternative': alternative,
    'Text--preLineBreak': preLineBreak,
  });

  return <p className={className}>{children}</p>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  alternative: PropTypes.bool,
  preLineBreak: PropTypes.bool,
};

Text.defaultProps = {
  alternative: false,
  preLineBreak: false,
};

export default Text;
