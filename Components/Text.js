import React, { Children, PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/Text';

const Text = ({ children, alternative }) => {
  const className = classNames({
    Text: true,
    'Text--alternative': alternative,
  });

  /* eslint-disable */
  const text = Children.map(children, child =>
    <span dangerouslySetInnerHTML={{ __html: child }} />
  );
  /* eslint-enable */

  return (
    <p className={className}>
      {text}
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
