import React from 'react';

import '../css/Components/Grid';
import '../css/Components/Moving';

import Text from '../Components/Text';
import Button from '../Components/Button';
import Link from '../Components/Link';
import Section from '../Components/Section';
import SectionTitle from '../Components/SectionTitle';
import TextHighlight from '../Components/TextHighlight';
import NumberedBlock from '../Components/NumberedBlock';
import SubSectionTitle from '../Components/SubSectionTitle';
import pdf from '../tap.pdf';

const Moving = () => (
  <div className="Moving">
    <Section>
      <div className="Moving-title">
        <SectionTitle>Getting to Braga</SectionTitle>
      </div>

      <div className="Moving-section">
        <div className="Grid Grid--1offset">
          <div className="Grid-5column md-6">
            <div className="Moving-subtitle">
              <SubSectionTitle>Porto Airport (OPO)</SubSectionTitle>
            </div>
            <div className="Moving-description">
              <div className="Moving-listTitle">
                <Text>
                  The closest airport is in Porto (OPO), from where you can either:
                </Text>
              </div>
              <br />
              <div className="Moving-descriptionNumberedBlock">
                <NumberedBlock number="1.">
                  <Text>
                    Catch a direct bus with a service called
                    {' '}
                    <Link target="_blank" href="https://getbus.eu/en/" noHover>
                      <TextHighlight>GetBus</TextHighlight>
                    </Link>
                    ;
                  </Text>
                </NumberedBlock>
                <br />
                <NumberedBlock number="2.">
                  <Text>
                    Catch a
                    {' '}
                    <Link target="_blank" href="https://www.cp.pt/passageiros/pt/consultar-horarios/estacoes/porto-campanha" noHover>
                      <TextHighlight>train at Porto Campanhã</TextHighlight>
                    </Link>
                    {' '}
                    (~ 1 hour trip).
                  </Text>
                </NumberedBlock>
              </div>
            </div>
          </div>
        </div>
        <div className="Moving-imageWrapper">
          <div className="Grid Grid--1offset">
            <div className="Grid-4column md-5" />
            <div className="Grid-5column md-6">
              <div className="Moving-portoImageWrapper">
                <div className="Moving-portoImage" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Moving-section">
        <div className="Grid Grid--1offset">
          <div className="Grid-4column md-5" />
          <div className="Grid-5column md-6">
            <div className="Moving-subtitle">
              <SubSectionTitle>Lisbon Airport (LIS)</SubSectionTitle>
            </div>
            <div className="Moving-description">
              <Text>
                If you want to land in Lisbon, you can catch a&nbsp;
                <Link target="_blank" href="https://www.cp.pt/passageiros/pt/consultar-horarios/estacoes/lisboa-oriente" noHover>
                  <TextHighlight>
                    train at Lisboa
                    Oriente
                </TextHighlight></Link> to Braga (~ 4 hour trip).
              </Text>
            </div>
          </div>
        </div>
        <div className="Moving-imageWrapper">
          <div className="Grid Grid--1offset">
            <div className="Grid-5column md-6">
              <div className="Moving-lisbonImageWrapper">
                <div className="Moving-lisbonImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Moving-section">
        <div className="Grid Grid--1offset">
          <div className="Grid-4column md-5">
            <div className="Moving-tap">
              <div className="Moving-tapLogo" />
              <div className="Moving-tapPlane" />
            </div>
          </div>
          <div className="Grid-5column md-6">
            <div className="Moving-subtitle">
              <SubSectionTitle>Flight discount</SubSectionTitle>
            </div>
            <div className="Moving-description">
              <Text>
                Our official airline, TAP Portugal, is giving a
                discount code to all attendees. If you are traveling
                in tourist class you will have a 10% discount. If
                traveling in business class you will get 15%
                discount.
              </Text>
              <div className="Moving-tapActions">
                <div className="Moving-tapAction">
                  <Link noHover href={pdf} target="_blank">
                    <Button transparent>Get Your Code</Button>
                  </Link>
                </div>
                <div className="Moving-tapAction">
                  <Button disabled>Buy Your Ticket</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

export default Moving;
