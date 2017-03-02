import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/Button';

const Button = ({ children, alternative }) => {
  const className = classNames({
    'Button': true,
    'Button--alternative': alternative,
  });

  return (
    <div className={className}>
      {children}
    </div>
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
