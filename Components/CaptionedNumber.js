import React, { PropTypes } from 'react';

import '../css/Components/CaptionedNumber';

const CaptionedNumber = ({ caption, nr }) => (
  <div className="CaptionedNumber">
    <div className="CaptionedNumber-nr">
      {nr}
    </div>

    <div className="CaptionedNumber-caption">
      {caption}
    </div>
  </div>
);

CaptionedNumber.propTypes = {
  caption: PropTypes.string.isRequired,
  nr: PropTypes.string.isRequired,
};

export default CaptionedNumber;
