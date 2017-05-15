import React, { PropTypes } from 'react';

import Text from './Text';
import SubSectionTitle from './SubSectionTitle';

import '../css/Components/EventDescription';

const EventDescription = ({ children }) => (
  <div className="EventDescription">
    {children}
  </div>
);

EventDescription.propTypes = { children: PropTypes.node.isRequired };

EventDescription.Title = ({ children }) => (
  <div className="EventDescription-title">
    <SubSectionTitle>{children}</SubSectionTitle>
  </div>
);

EventDescription.Title.propTypes = { children: PropTypes.node.isRequired };

EventDescription.Text = ({ children }) => (
  <div className="EventDescription-text">
    <Text>{children}</Text>
  </div>
);

EventDescription.Text.propTypes = { children: PropTypes.node.isRequired };

export default EventDescription;
