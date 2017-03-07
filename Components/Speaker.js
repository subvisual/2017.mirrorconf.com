import React, { PropTypes } from 'react';

import '../css/Components/Speaker';

import Text from './Text';
import SubSectionTitle from './SubSectionTitle';

const gradient = 'to bottom, rgba(12, 29, 97, 0.1), #081340';

const styleForSpeaker = image => ({
  backgroundImage: `linear-gradient(${gradient}), url(${image})`,
});

const Speaker = ({ name, bio, image }) => (
  <div className="Speaker" style={styleForSpeaker(image)}>
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
