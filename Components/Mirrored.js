import React from 'react';

const Mirrored = (props) => {
  const finalProps = {
    'data-mirror-id': props.id,
    'data-mirror-hover': props.hover,
  };

  return React.cloneElement(props.children, finalProps);
};

export default Mirrored;
