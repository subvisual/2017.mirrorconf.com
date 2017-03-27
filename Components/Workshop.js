import React, { PropTypes } from 'react';

import '../css/Components/Workshop';

import Text from './Text';
import ImageGradient from './ImageGradient';
import SubSectionTitle from './SubSectionTitle';
import Mirrored from './Mirrored';

const Workshop = ({ name, instructor, image }) => (
  <Mirrored hide>
    <div className="Workshop" style={ImageGradient(image)}>
      <div className="Workshop-details">
        <SubSectionTitle>{name}</SubSectionTitle>
        <Text>{instructor}</Text>
      </div>
    </div>
  </Mirrored>
);

Workshop.propTypes = {
  instructor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Workshop;
