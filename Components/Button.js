import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/Button';

const Button = ({ children, alternative, transparent, onClick }) => {
  const className = classNames({
    Button: true,
    'Button--alternative': alternative,
    'Button--transparent': transparent,
  });

  return (
    <span className={className} onClick={onClick}>
      {children}
    </span>
  );
};

Button.propTypes = {
  alternative: PropTypes.bool,
  transparent: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  alternative: false,
  transparent: false,
  onClick: null,
};

export default Button;
