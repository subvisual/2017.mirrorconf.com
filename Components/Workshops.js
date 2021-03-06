import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import '../css/Components/Grid';
import '../css/Components/Workshops';

import Section from './Section';
import Workshop from './Workshop';
import DropcapText from './DropcapText';
import SectionTitle from './SectionTitle';
import WorkshopsData from '../data/workshops';
import SubSectionTitle from './SubSectionTitle';
import Link from './Link';

const workshopsReducer = (accum, workshop, index) => {
  if (index % 2 === 0) {
    return { odd: [...accum.odd, workshop], even: [...accum.even] };
  }

  return { odd: [...accum.odd], even: [...accum.even, workshop] };
};

const workshops = (function workshopsData() {
  if (WorkshopsData.length <= 2) {
    return [WorkshopsData, []];
  }

  return _.chain(WorkshopsData)
    .reduce(workshopsReducer, { odd: [], even: [] })
    .toArray()
    .zip()
    .flatten()
    .value();
}());

const renderWorkshop = isOddRow => (workshop, index) => {
  const isEvenWorkshop = index % 2 !== 0;

  const className = classNames({
    'Grid-4column md-5': (isEvenWorkshop && !isOddRow) || (!isEvenWorkshop && isOddRow),
    'Grid-5column md-6': (!isEvenWorkshop && !isOddRow) || (isEvenWorkshop && isOddRow),
  });

  return (
    <div key={index} className={className}>
      <div className={`Workshops-item ${!isEvenWorkshop ? 'odd' : ''}`}>
        <Link href={`/workshops/#${workshop.id}`}>
          <Workshop {...workshop} />
        </Link>
      </div>
    </div>
  );
};

const renderWorkshopsRow = (row, index) => {
  const isOddRow = index % 2 === 0;

  return (
    <div key={index} className="Workshops-row">
      <div className="Grid Grid--1offset">
        {row.map(renderWorkshop(isOddRow))}
      </div>
    </div>
  );
};

const Workshops = () => (
  <section className="Workshops">
    <Section>
      <div className="Workshops-header">
        <SectionTitle>Workshops</SectionTitle>
      </div>
      <div className="Workshops-description">
        <div className="Grid Grid--1offset">
          <div className="Grid-5column md-11">
            <div className="Workshops-subHeader">
              <SubSectionTitle>Enlarging the Experience</SubSectionTitle>
            </div>

            <DropcapText>
              This year we wanted to enlarge the Mirror experience and with that in
              mind we decided to give to you four amazing workshops. From design
              planning to front-end mastering, with experienced mentors who define
              the web, we are sure that these workshops will empower your craft.
            </DropcapText>
          </div>
        </div>
      </div>

      <div className="Workshops-list">
        {workshops.map(renderWorkshopsRow)}
      </div>
    </Section>
  </section>
);

export default Workshops;
