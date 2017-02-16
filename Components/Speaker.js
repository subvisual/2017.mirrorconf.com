import React, { PropTypes } from 'react';

import '../css/Components/Speaker';

import Text from './Text';

const gradient = 'to bottom, rgba(12, 29, 97, 0.1), #081340';

const styleForSpeaker = image => ({
  backgroundImage: `linear-gradient(${gradient}), url(${image})`,
});

const Speaker = ({ name, bio, image }) => (
  <div className="Speaker" style={styleForSpeaker(image)}>
    <div className="Speaker-details">
      <h3 className="Speaker-name">{name}</h3>
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
