import React from 'react';

import Footer from '../Components/Footer';
import SectionTitle from '../Components/SectionTitle';
import Section from '../Components/Section';
import SpeakerDetails from '../Components/SpeakerDetails';

import '../css/Components/SpeakersPage';
import SpeakerData from '../data/speakers';

const SpeakersPage = () => (
  <div className="SpeakersPage">
    <Section>
      <SectionTitle>Speakers</SectionTitle>

      {SpeakerData.map(speakerData =>
        <div className="SpeakersPage-speaker">
          <SpeakerDetails {...speakerData} />
        </div>,
      )}

      <Footer />
    </Section>
  </div>
);

export default SpeakersPage;
