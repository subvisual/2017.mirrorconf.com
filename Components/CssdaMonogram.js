import React from 'react';

import '../css/Components/CssdaMonogram';

import { body } from './CssdaMonogram.html';

/* eslint-disable react/no-danger */
const CssdaMonogram = () => (
  <div className="CssdaMonogram" dangerouslySetInnerHTML={{ __html: body }} />
);
/* eslint-enable react/no-danger */

export default CssdaMonogram;
