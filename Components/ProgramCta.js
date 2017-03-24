import React from 'react';

import '../css/Components/Grid';
import '../css/Components/ProgramCta';

import Text from '../Components/Text';
import Button from '../Components/Button';
import Section from '../Components/Section';
import WhiteBox from '../Components/WhiteBox';
import SubSectionTitle from '../Components/SubSectionTitle';

const ProgramCta = () => (
  <Section>
    <WhiteBox id="ProgramCta">
      <div className="ProgramCta-title">
        <SubSectionTitle alternate>Explore the program</SubSectionTitle>
      </div>
      <div className="ProgramCta-description">
        <Text alternative>
          We have prepared a program with activities that will get you to
          know better the beautiful north of Portugal. Between Braga
          and Porto you will have time to explore in the days before
          and axfter the conference.
        </Text>
      </div>
      <Button alternative>EXPLORE PROGRAM</Button>
    </WhiteBox>
  </Section>
);

export default ProgramCta;
