import React from 'react';

import '../css/Components/Sponsors';
import '../css/Components/Grid';

import Text from './Text';
import Link from './Link';
import Button from './Button';
import Section from './Section';
import Mirrored from './Mirrored';
import SectionTitle from './SectionTitle';
import SubSectionTitle from './SubSectionTitle';
import SponsorsData from '../data/sponsors';

const renderLogos = logos => logos.map(logo =>
  <span className="Sponsors-levelLogo">
    <Link
      target="_blank"
      href={logo.href}
    >
      <img
        alt={logo.alt}
        key={logo.id}
        src={logo.src}
      />
    </Link>
  </span>,
);

const renderLevel = data => (
  <div key={data.title} className="Sponsors-level">
    <div className="Sponsors-levelTitle">
      <SubSectionTitle>{ data.title }</SubSectionTitle>
    </div>
    <div className="Sponsors-levelLogos">
      { renderLogos(data.logos) }
    </div>
  </div>
  );

const Sponsors = () => (
  <Mirrored hide>
    <div className="Sponsors">
      <Section>
        <div className="Grid">
          <div className="Grid-10column">
            <div className="Sponsors-wrapper">
              <div className="Sponsors-title">
                <SectionTitle alternate>Sponsors</SectionTitle>
              </div>
              <div className="Grid Grid--1offset">
                <div className="Sponsors-levelsTitle">
                  <Text alternative>A warm thank you to our amazing sponsors.</Text>
                </div>
                { SponsorsData.map(renderLevel) }
              </div>
              <SubSectionTitle alternate>
                Want to be help us make the best conference?
              </SubSectionTitle>
              <div className="Sponsors-actions">
                <Link noHover href="/sponsoring.pdf" target="_blank">
                  <Button alternative>Sponsor us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  </Mirrored>
);

export default Sponsors;
