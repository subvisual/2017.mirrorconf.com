import React from 'react';

const Mirrored = ({ children, id, hover, hide, disable }) => {
  const finalProps = {
    'data-mirror-id': id,
    'data-mirror-hide': hide,
    'data-mirror-hover': hover,
    'data-mirror-disable': disable,
  };

  return React.cloneElement(children, finalProps);
};

export default Mirrored;
