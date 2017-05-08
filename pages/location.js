import React from 'react';

import '../css/Components/LocationPage';

import Tabs from '../Components/Tabs';
import Venue from '../Components/Venue';
import Moving from '../Components/Moving';
import Sleeping from '../Components/Sleeping';
// import Eating from '../Components/Eating';
import Footer from '../Components/Footer';
import ProgramCta from '../Components/ProgramCta';

const tabs = [
  { id: 1, label: 'Moving', component: <Moving /> },
  { id: 2, label: 'Sleeping', component: <Sleeping /> },
  // { id: 3, label: 'Eating', component: <Eating /> },
];

const LocationPage = () => (
  <div className="LocationPage">
    <Venue />
    <div className="LocationPage-section">
      <Tabs tabs={tabs} />
      <div className="LocationPage-cta">
        <ProgramCta />
      </div>
    </div>
    <div className="LocationPage-section">
      <Footer />
    </div>
  </div>
);

export default LocationPage;
