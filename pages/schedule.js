import React from 'react';

import Tabs from '../Components/Tabs';
import Footer from '../Components/Footer';
import Section from '../Components/Section';
import DropcapText from '../Components/DropcapText';
import SectionTitle from '../Components/SectionTitle';
import SubSectionTitle from '../Components/SubSectionTitle';
import WorkshopsSchedule from '../Components/WorkshopsSchedule';
import ConferenceSchedule from '../Components/ConferenceSchedule';

import '../css/Components/Grid';
import '../css/Components/Schedule';

const tabs = [
  { id: 1, label: '10 & 11 October', component: <WorkshopsSchedule /> },
  { id: 2, label: '12 & 13 October', component: <ConferenceSchedule /> },
];

const Schedule = () => (
  <div className="Schedule">
    <Section>
      <div className="Schedule-hero">
        <SectionTitle>Schedule</SectionTitle>
        <div className="Grid Grid--1offset">
          <div className="Grid-5column md-11">
            <div className="Schedule-subtitle">
              <SubSectionTitle>Enlarging the Experience</SubSectionTitle>
            </div>
            <div className="Schedule-description">
              <DropcapText>
                This year we wanted to enlarge the Mirror experience and with that in mind we
                decided to give to you four amazing workshops. From design planning to front-end
                mastering, with experienced mentors who define the web, we are sure that these
                workshops will empower your craft.
              </DropcapText>
            </div>
          </div>
        </div>
      </div>
    </Section>
    <div className="Schedule-body">
      <div className="Grid Grid--1offset">
        <div className="Grid-9column md-11">
          <Tabs tabs={tabs} activeTab={tabs[1]} />
        </div>
      </div>
    </div>
    <div className="Schedule-footer">
      <Footer />
    </div>
  </div>
);

export default Schedule;
