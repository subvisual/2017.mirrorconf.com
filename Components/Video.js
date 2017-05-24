import React, { PropTypes } from 'react';

const Video = ( {src, className, children} ) => (
  <video autoplay loop className={className}>
    <source src={src} type="video/webm" />
    {children}
  </video>
);

Video.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  src: PropTypes.string.isRequired
};

export default Video;
