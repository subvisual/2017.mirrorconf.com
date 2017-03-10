import React from 'react';

const Mirrored = ({ children, id, hover, hide, desktopOnly }) => {
  const finalProps = {
    'data-mirror-id': id,
    'data-mirror-hide': hide,
    'data-mirror-hover': hover,
    'data-mirror-desktopOnly': desktopOnly,
  };

  return React.cloneElement(children, finalProps);
};

export default Mirrored;
