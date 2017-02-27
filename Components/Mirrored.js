import React from 'react';

const Mirrored = ({ children, id, hover, hide }) => {
  const finalProps = {
    'data-mirror-id': id,
    'data-mirror-hide': hide,
    'data-mirror-hover': hover,
  };

  return React.cloneElement(children, finalProps);
};

export default Mirrored;
