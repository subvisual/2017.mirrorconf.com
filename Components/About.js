import React from 'react';

import CaptionedNumber from './CaptionedNumber';
import DropcapText from './DropcapText';
import Section from './Section';
import SectionTitle from './SectionTitle';
import SubSectionTitle from './SubSectionTitle';

import '../css/Components/About';

const About = () => (
  <Section>
    <div className="About">
      <div className="About-header">
        <SectionTitle>About MirrorConf</SectionTitle>
      </div>
      <div className="About-content">
        <SubSectionTitle>Empowering People</SubSectionTitle>
        <div className="About-text">
          <DropcapText>
            Mirror Conf is a conference designed to empower designers and front-end developers
            who have a thirst for knowledge and want to broaden their horizons.
            It aims to create the perfect set to blur the differences between these two worlds
            and point towards a more collaborative future.
          </DropcapText>
        </div>
        <div className="About-info">
          <div className="About-attendancePhoto" />
          <div className="About-venuePhoto" />

          <div className="About-currentEdition">
            <div className="About-currentTitle">
              <SubSectionTitle alternate italic>
                2017 - Refraction: technology that changes
              </SubSectionTitle>
            </div>

            <div className="About-numbers">
              <div className="About-number">
                <CaptionedNumber nr="4" caption="Days" />
              </div>
              <div className="About-number">
                <CaptionedNumber nr="1" caption="Party" />
              </div>
              <div className="About-number">
                <CaptionedNumber nr="4" caption="Workshops" />
              </div>
            </div>
            <div className="About-numbers">
              <div className="About-number">
                <CaptionedNumber nr="12" caption="Speakers" />
              </div>
              <div className="About-number">
                <CaptionedNumber nr="400+" caption="Attendees" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default About;
