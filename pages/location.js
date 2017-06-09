import React from 'react';

import '../css/Components/LocationPage';

import Tabs from '../Components/Tabs';
import Venue from '../Components/Venue';
import Moving from '../Components/Moving';
import Sleeping from '../Components/Sleeping';
// import Eating from '../Components/Eating';
import Footer from '../Components/Footer';
import Mirror from '../Components/Mirror';

const tabs = [
  { id: 1, label: 'Moving', component: <Moving /> },
  { id: 2, label: 'Sleeping', component: <Sleeping /> },
  // { id: 3, label: 'Eating', component: <Eating /> },
];

const LocationPage = () => (
  <div className="LocationPage">
    <Mirror>
      <Venue />
    </Mirror>
    <div className="LocationPage-mainSection">
      <Tabs tabs={tabs} />
      <div className="LocationPage-cta" />
    </div>
    <div className="LocationPage-footerSection">
      <Footer />
    </div>
  </div>
);

export default LocationPage;
