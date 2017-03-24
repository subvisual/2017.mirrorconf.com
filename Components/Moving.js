import React from 'react';

import '../css/Components/Grid';
import '../css/Components/Moving';

import Text from '../Components/Text';
import Section from '../Components/Section';
import SectionTitle from '../Components/SectionTitle';
import TextHighlight from '../Components/TextHighlight';
import NumberedBlock from '../Components/NumberedBlock';
import SubSectionTitle from '../Components/SubSectionTitle';

const Moving = () => (
  <div className="Moving">
    <Section>
      <div className="Moving-title">
        <SectionTitle>Getting to Braga</SectionTitle>
      </div>

      <div className="Moving-section">
        <div className="Grid Grid--1offset">
          <div className="Grid-5column">
            <div className="Moving-subtitle">
              <SubSectionTitle>Porto Airport (OPO)</SubSectionTitle>
            </div>
            <div className="Moving-description">
              <Text>
                The closest airport is in Porto (OPO), from where you can either:
              </Text>
              <br />
              <NumberedBlock number="1.">
                <Text>
                  Catch a direct bus with a service called
                  {' '}
                  <TextHighlight>GetBus</TextHighlight>
                  ;
                </Text>
              </NumberedBlock>
              <br />
              <NumberedBlock number="2.">
                <Text>
                  Catch a
                  {' '}
                  <TextHighlight>train at Porto Campanhã</TextHighlight>
                  {' '}
                  (~ 1 hour trip).
                </Text>
              </NumberedBlock>
            </div>
          </div>
        </div>
        <div className="Moving-imageWrapper">
          <div className="Grid Grid--1offset">
            <div className="Grid-4column" />
            <div className="Grid-5column">
              <div className="Moving-portoImage" />
            </div>
          </div>
        </div>
      </div>

      <div className="Moving-section">
        <div className="Grid Grid--1offset">
          <div className="Grid-4column" />
          <div className="Grid-5column">
            <div className="Moving-subtitle">
              <SubSectionTitle>Lisbon Airport (LIS)</SubSectionTitle>
            </div>
            <div className="Moving-description">
              <Text>
                If you want to land in Lisbon, you can catch a <TextHighlight>
                  train at Lisboa
                  Oriente
                </TextHighlight> to Braga (~ 4 hour trip).
              </Text>
            </div>
          </div>
        </div>
        <div className="Moving-imageWrapper">
          <div className="Grid Grid--1offset">
            <div className="Grid-5column">
              <div className="Moving-lisbonImage" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

export default Moving;
