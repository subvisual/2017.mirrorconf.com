import React, { PropTypes } from 'react';

import '../css/Components/SpeakerDetails';

import Link from './Link';

const SpeakerDetails = props => (
  <div className="SpeakerDetails" id={props.id}>
    <div className="SpeakerDetails-imageContainer">
      <div className="SpeakerDetails-imageOverlay" />
      <img className="SpeakerDetails-image" alt={props.name} src={props.image} />
    </div>
    <div className="SpeakerDetails-columns">
      <div className="SpeakerDetails-details">
        <h2 className="SpeakerDetails-name">{props.nameWithBreaks}</h2>
        <Link href={`https://twitter.com/${props.twitter}`} target="_blank" noHover>
          <div className="SpeakerDetails-link">
            <span className="SpeakerDetails-twitterIcon" />
            <span>Twitter</span>
          </div>
        </Link>

        <Link href={props.website} target="_blank" noHover>
          <div className="SpeakerDetails-link">
            <span className="SpeakerDetails-websiteIcon" />
            <span>Website</span>
          </div>
        </Link>

        <div className="SpeakerDetails-info">{props.datetime}</div>
      </div>
      <div className="SpeakerDetails-description">
        {props.description}
      </div>
    </div>
  </div>
);

SpeakerDetails.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nameWithBreaks: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  datetime: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
};

SpeakerDetails.defaultProps = {
  speakerLayout: false,
};

export default SpeakerDetails;
