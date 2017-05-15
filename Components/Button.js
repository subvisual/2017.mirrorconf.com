import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/Button';

const Button = ({ children, alternative, transparent, onClick }) => {
  const className = classNames({
    Button: true,
    'Button--alternative': alternative,
    'Button--transparent': transparent,
  });

  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <span className={className} onClick={onClick}>
      {children}
    </span>
  );
  /* eslint-enable jsx-a11y/no-static-element-interactions */
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
