import React from 'react';

const Mirrored = (props) => {
  const finalProps = {
    'data-mirror-hover': props.hover,
    'data-mirror-disabled': props.disabled,
  };

  return React.cloneElement(props.children, finalProps);
};

export default Mirrored;
