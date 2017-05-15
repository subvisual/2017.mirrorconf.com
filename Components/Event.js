import React, { PropTypes } from 'react';

import '../css/Components/Event';

import ImageGradient from './ImageGradient';
import Link from './Link';
import Button from './Button';
import Mirrored from './Mirrored';

const ticketSection = ({ className, price, ticketUrl }) => {
  if (!ticketUrl) {
    return null;
  }

  return <div className={className}>
    <div className="Event-price">€{price}</div>
    <Link href={ticketUrl}>
      <Button>Buy ticket</Button>
    </Link>
  </div>;
}

const Event = props => (
  <div className="Event" id={props.id}>
    <div className="Event-imageContainer">
        <div className="Event-imageOverlay" />
        <img className="Event-image" alt={props.name} src={props.image} />
    </div>
    <Mirrored hide>
      <h2 className="Event-name">{props.name}</h2>
    </Mirrored>
    <div className="Event-columns">
      <Mirrored hide>
        <div className="Event-details">
          <div className="Event-info">With {props.instructor}</div>
          <div className="Event-info">
            <div className="Event-calendarIcon" />
            {props.datetime}
          </div>
          <div className="Event-info">
            <div className="Event-locationIcon" />
            <Link noHover href={props.locationUrl} target="_blank">
              {props.location}
            </Link>
          </div>

          {ticketSection({ className: "Event-ticketsDesktop", ...props })}
        </div>
      </Mirrored>
      <div className="Event-description">
        {props.description}
      </div>
    </div>
    {ticketSection({ className: "Event-ticketsMobile", ...props })}
  </div>
);

Event.propTypes = {
  id: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired,
  ticketUrl: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Event;
