import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Text from './Text';
import SubSectionTitle from './SubSectionTitle';

import '../css/Components/EventDescription';

const EventDescription = ({ children, noMargin }) => {
  const classes = classnames({
    EventDescription: true,
    'EventDescription--noMarginTop': noMargin,
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

EventDescription.propTypes = {
  children: PropTypes.node.isRequired,
  noMargin: PropTypes.bool,
};

EventDescription.defaultProps = {
  noMargin: false,
};

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

EventDescription.Placeholder = () => (
  <div className="EventDescription-placeholder" />
);

export default EventDescription;
