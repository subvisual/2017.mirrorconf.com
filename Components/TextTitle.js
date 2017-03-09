import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/TextTitle';

const TextTitle = ({ children, alternate }) => {
  const className = classNames({
    TextTitle: true,
    'TextTitle--alternate': alternate,
  });

  return (
    <h3 className={className}>
      {children}
    </h3>
  );
};

TextTitle.propTypes = {
  children: PropTypes.node.isRequired,
  alternate: PropTypes.bool,
};

TextTitle.defaultProps = {
  alternate: false,
};

export default TextTitle;
