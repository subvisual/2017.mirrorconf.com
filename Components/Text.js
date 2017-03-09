import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/Text';

const Text = ({ children, alternative }) => {
  const className = classNames({
    Text: true,
    'Text--alternative': alternative,
  });

  return (
    <p className={className}>
      {children}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  alternative: PropTypes.bool,
};

Text.defaultProps = {
  alternative: false,
};

export default Text;
