import React from 'react';

import '../css/Components/Speaker';
import '../css/Components/Speakers';

import Speaker from './Speaker';
import Section from './Section';
import SectionTitle from './SectionTitle';

import SpeakersData from '../data/speakers';

const renderSpeaker = speaker => (
  <li key={speaker.name} className="Speakers-item">
    <Speaker {...speaker} />
  </li>
);

const Speakers = () => (
  <div className="Speakers">
    <Section>
      <div className="Speakers-header">
        <SectionTitle>Speakers</SectionTitle>
      </div>
      <ul className="Speakers-list">
        {SpeakersData.map(renderSpeaker)}
      </ul>
    </Section>
  </div>
);

export default Speakers;
