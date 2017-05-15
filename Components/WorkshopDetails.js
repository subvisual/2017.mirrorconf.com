import React, { PropTypes } from 'react';

import '../css/Components/WorkshopDetails';

import Link from './Link';
import Button from './Button';
import Mirrored from './Mirrored';

const ticketSection = ({ className, attendeePrice, nonAttendeePrice }) => (
  <div className={className}>
    <div className="WorkshopDetails-price">
      <div className="WorkshopDetails-priceValue">€{nonAttendeePrice}</div>
      <div className="WorkshopDetails-priceLabel">Normal Price</div>
    </div>

    <div className="WorkshopDetails-price">
      <div className="WorkshopDetails-priceValue">€{attendeePrice}</div>
      <div className="WorkshopDetails-priceLabel">With full ticket</div>
    </div>

    <div className="WorkshopDetails-cta">
      <Link alternateFontuhref="https://ti.to/subvisual/mirror-conf-2017">
        <Button>Buy ticket</Button>
      </Link>
    </div>
  </div>
);

ticketSection.propTypes = {
  className: PropTypes.string.isRequired,
  attendeePrice: PropTypes.number.isRequired,
  nonAttendeePrice: PropTypes.number.isRequired,
};

const WorkshopDetails = props => (
  <div className="WorkshopDetails" id={props.id}>
    <div className="WorkshopDetails-imageContainer">
      <div className="WorkshopDetails-imageOverlay" />
      <img className="WorkshopDetails-image" alt={props.name} src={props.image} />
    </div>
    <Mirrored hide>
      <h2 className="WorkshopDetails-name">{props.name}</h2>
    </Mirrored>
    <div className="WorkshopDetails-columns">
      <Mirrored hide>
        <div className="WorkshopDetails-details">
          <div className="WorkshopDetails-info">With {props.instructor}</div>
          <div className="WorkshopDetails-info">
            <div className="WorkshopDetails-calendarIcon" />
            {props.datetime}
          </div>
          <div className="WorkshopDetails-info">
            <div className="WorkshopDetails-locationIcon" />
            <Link alternateFont noHover href={props.locationUrl} target="_blank">
              {props.location}
            </Link>
          </div>

          {ticketSection({ className: 'WorkshopDetails-ticketsDesktop', ...props })}
        </div>
      </Mirrored>
      <div className="WorkshopDetails-description">
        {props.description}
      </div>
    </div>
    {ticketSection({ className: 'WorkshopDetails-ticketsMobile', ...props })}
  </div>
);

WorkshopDetails.propTypes = {
  id: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired,
  locationUrl: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
};

export default WorkshopDetails;
