import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/Button';

const Button = ({ children, alternative }) => {
  const className = classNames({
    'Button': true,
    'Button--alternative': alternative,
  });

  return (
    <button className={className}>
      {children}
    </button>
  );
};

Button.propTypes = {
  alternative: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  alternative: false,
};

export default Button;
