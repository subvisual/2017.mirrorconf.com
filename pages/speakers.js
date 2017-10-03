import React from 'react';

import Footer from '../Components/Footer';
import SectionTitle from '../Components/SectionTitle';
import Section from '../Components/Section';
import SpeakerDetails from '../Components/SpeakerDetails';

import '../css/Components/SpeakersPage';
import SpeakerData from '../data/speakers';

const SpeakersPage = () => (
  <div className="SpeakersPage">
    <div className="SpeakersPage-content">
      <Section>
        <div className="SpeakersPage-title">
          <SectionTitle>Speakers</SectionTitle>
        </div>

        {SpeakerData.map(speakerData =>
          <div className="SpeakersPage-speaker">
            <SpeakerDetails {...speakerData} />
          </div>,
        )}
      </Section>
    </div>
    <Footer />
  </div>
);

export default SpeakersPage;
