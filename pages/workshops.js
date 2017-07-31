import React from 'react';

import Footer from '../Components/Footer';
import SectionTitle from '../Components/SectionTitle';
import Section from '../Components/Section';
import Grid, { Column } from '../Components/Grid';

import '../css/Components/WorkshopsPage';
import Workshops from '../data/workshops';

const WorkshopsPage = () =>
  <div className="WorkshopsPage">
    <Section>
      <SectionTitle>Workshops</SectionTitle>
      <Grid offset="1">
        <Column size="2">Brad Frost</Column>
        <Column size="3" overflow="1">
          <img src="http://via.placeholder.com/310x417" />
        </Column>
        <Column size="5">Author of Atomic Design</Column>
      </Grid>
      <Grid offset="1">
        <Column size="2">Brad Frost</Column>
        <Column size="2">
          <img src="http://via.placeholder.com/310x417" />
        </Column>
        <Column size="5">Author of Atomic Design</Column>
      </Grid>
      <Grid offset="1">
        <Column size="2">Brad Frost</Column>
        <Column size="2">
          <img src="http://via.placeholder.com/310x417" />
        </Column>
        <Column size="5">Author of Atomic Design</Column>
      </Grid>
      <Footer />
    </Section>
  </div>;

export default WorkshopsPage;
