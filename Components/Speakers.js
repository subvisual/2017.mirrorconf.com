import React from 'react';

import '../css/Components/Speaker';
import '../css/Components/Speakers';

import Speaker from './Speaker';
import Section from './Section';
import SectionTitle from './SectionTitle';
import MoreToCome from './MoreToCome';
import Mirror from './Mirror';
import SpeakersData from '../data/speakers';

const renderSpeaker = speaker => (
  <li key={speaker.name} className="Speakers-item">
    <Speaker {...speaker} />
  </li>
);

const Speakers = () => (
  <div className="Speakers">
    <Mirror>
      <Section>
        <div className="Speakers-header">
          <SectionTitle>Speakers</SectionTitle>
        </div>
        <ul className="Speakers-list">
          {SpeakersData.map(renderSpeaker)}
          <div className="Speakers-item">
            <MoreToCome />
          </div>
        </ul>
      </Section>
    </Mirror>
  </div>
);

export default Speakers;
