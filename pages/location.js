import React from 'react';

import '../css/Components/Location';

import Tabs from '../Components/Tabs';
import Venue from '../Components/Venue';
import Moving from '../Components/Moving';
import Footer from '../Components/Footer';
import ProgramCta from '../Components/ProgramCta';

const tabs = [
  { id: 1, label: 'Moving', component: <Moving /> },
  // { id: 2, label: 'Moving', component: <Moving /> },
  // { id: 3, label: 'Moving', component: <Moving /> },
];

const Location = () => (
  <div className="Location">
    <Venue />
    <div className="Location-section">
      <Tabs tabs={tabs} />
      <div className="Location-cta">
        <ProgramCta />
      </div>
      <Footer />
    </div>
  </div>
);

export default Location;
