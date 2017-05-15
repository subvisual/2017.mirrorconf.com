import React from 'react';

import CallToAction from '../Components/CallToAction';
import Footer from '../Components/Footer';
import SectionTitle from '../Components/SectionTitle';
import Section from '../Components/Section';
import Event from '../Components/Event';
import ShowMore from '../Components/ShowMore';

import '../css/Components/WorkshopsPage';
import WorkshopData from '../data/workshops';

const WorkshopsPage = () => (
  <div className="WorkshopsPage">
    <Section>
      <SectionTitle>Workshops</SectionTitle>

      <div className="WorkshopsPage-workshop">
        <ShowMore>
          <Event {...WorkshopData[0]} />
        </ShowMore>
      </div>

      <div className="WorkshopsPage-workshop">
        <ShowMore>
          <Event {...WorkshopData[1]} />
        </ShowMore>
      </div>

      <div className="WorkshopsPage-workshop">
        <ShowMore>
          <Event {...WorkshopData[2]} />
        </ShowMore>
      </div>

      <div className="WorkshopsPage-workshop">
        <ShowMore>
          <Event {...WorkshopData[3]} />
        </ShowMore>
      </div>

      <div className="WorkshopsPage-section">
        <CallToAction
          title="Explore the program"
          text="We have prepared a program with activities that will get you to
  know better the beautiful north of Portugal. Between Braga
  and Porto you will have time to explore in the days before
  and after the conference."
          buttonText="Explore the program"
          href="#"
        />
      </div>
      <Footer />
    </Section>
  </div>
);

export default WorkshopsPage;
