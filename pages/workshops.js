import React from 'react';

import CallToAction from '../Components/CallToAction';
import Footer from '../Components/Footer';
import SectionTitle from '../Components/SectionTitle';
import Section from '../Components/Section';
import WorkshopDetails from '../Components/WorkshopDetails';
import ShowMore from '../Components/ShowMore';

import '../css/Components/WorkshopsPage';
import WorkshopData from '../data/workshops';

const WorkshopsPage = () => (
  <div className="WorkshopsPage">
    <div className="WorkshopsPage-content">
      <Section>
        <SectionTitle>Workshops</SectionTitle>

        <ul className="WorkshopsPage-workshops">
          <li className="WorkshopsPage-workshop">
            <ShowMore isExpanded={WorkshopData[0].isExpanded}>
              <WorkshopDetails {...WorkshopData[0]} />
            </ShowMore>
          </li>

          <li className="WorkshopsPage-workshop">
            <ShowMore isExpanded={WorkshopData[1].isExpanded}>
              <WorkshopDetails {...WorkshopData[1]} />
            </ShowMore>
          </li>

          <li className="WorkshopsPage-workshop">
            <ShowMore isExpanded={WorkshopData[2].isExpanded}>
              <WorkshopDetails {...WorkshopData[2]} />
            </ShowMore>
          </li>

          <li className="WorkshopsPage-workshop">
            <ShowMore isExpanded={WorkshopData[3].isExpanded}>
              <WorkshopDetails {...WorkshopData[3]} />
            </ShowMore>
          </li>
        </ul>

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
      </Section>
    </div>
    <Footer />
  </div>
);

export default WorkshopsPage;
