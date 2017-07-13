import React from 'react';

import '../css/Components/Grid';
import '../css/Components/Venue';

import VenueImage from '../images/venue.jpg';

import Text from '../Components/Text';
import Link from '../Components/Link';
import Section from '../Components/Section';
import DropcapText from '../Components/DropcapText';
import SectionTitle from '../Components/SectionTitle';
import ImageGradient from '../Components/ImageGradient';
import SubSectionTitle from '../Components/SubSectionTitle';
import Mirror from '../Components/Mirror';

const Venue = () => (
  <div className="Venue">
    <Mirror>
      <Section>
        <div className="Venue-title">
          <SectionTitle>The Venue</SectionTitle>
        </div>
        <div className="Grid Grid--1offset">
          <div className="Grid-5column">
            <div className="Venue-subtitle">
              <SubSectionTitle>Theatro Circo, Braga, Portugal</SubSectionTitle>
            </div>
            <div className="Venue-description">
              <DropcapText>
                Mirror Conf will take place in Braga, a beautiful, friendly city
                surrounded by stunning mountains and one of the oldest portuguese cities,
                established in Roman times as Bracara Avgvsta.
              </DropcapText>
              <br />
              <Text>
                The venue for Mirror Conf will be Theatro Circo, a 20th-century,
                Portuguese revivalist theatre and one of the most emblematic theatre in
                Europe. It is located in one of the principal avenues in Braga, Avenida da
                Liberdade.
              </Text>
              <Link href="www.google.pt" >Find your way here</Link>
            </div>
          </div>
        </div>

        <div className="Grid Grid--1offset">
          <div className="Venue-image" style={ImageGradient(VenueImage)} />
        </div>
      </Section>
    </Mirror>
  </div>
);

export default Venue;
