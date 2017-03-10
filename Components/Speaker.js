import React, { PropTypes } from 'react';

import '../css/Components/Speaker';

import Text from './Text';
import ImageGradient from './ImageGradient';
import SubSectionTitle from './SubSectionTitle';

const Speaker = ({ name, bio, image }) => (
  <div className="Speaker" style={ImageGradient(image)}>
    <div className="Speaker-details">
      <SubSectionTitle>{name}</SubSectionTitle>
      <Text>{bio}</Text>
    </div>
  </div>
);

Speaker.propTypes = {
  bio: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Speaker;
