import React from 'react';

import '../css/Components/Grid';
import '../css/Components/Eating';

import Section from '../Components/Section';
import SectionTitle from '../Components/SectionTitle';
import Location from '../Components/Location';

const RestaurantData = [
  {
    name: 'Casa de Pasto das Carvalheiras',
    description: 'To share with the ones you love',
    address: 'Rua D. Afonso Henriques 8, 4700-030, Braga',
    minutes: 6,
    phone: '+351 253 046 244',
    url: '#',
  },
  {
    name: 'Michizaki',
    description: 'A little bit of Japan in Braga',
    address: 'Rua Dom Frei Caetano Brandão, 169, 4700-031, Braga',
    minutes: 6,
    phone: '+351 253 086 587',
    url: '#',
  },
  {
    name: 'Arcoense',
    description: 'Traditional portuguese cuisine.',
    address: 'R. Eng. José Justino de Amorim, 96, 4715-400, Braga',
    minutes: 6,
    phone: '+351 253 278 952',
    url: '#',
  },
  {
    name: 'Bira dos Namorados',
    description: 'Hamburger and beef joint.',
    address: 'Rua D. Gonçalo Pereira, 85, 4700-032, Braga',
    minutes: 6,
    phone: '+351 253 039 571',
    url: '#',
  },
  {
    name: 'Retrokitchen',
    description: 'Your grandmother’s house in the heart of the city.',
    address: 'Rua do Anjo, 96, 4700-305, Braga',
    minutes: 6,
    phone: '+351 253 278 952',
    url: '#',
  },
  {
    name: 'Alfacinha',
    description: 'The macrobiotic restaurant.',
    address: 'Rua D. Gonçalo Pereira, 75, 4700-032, Braga',
    minutes: 6,
    phone: '+351 253 039 571',
    url: '#',
  },
];

const Eating = () => (
  <div className="Eating">
    <Section>
      <div className="Eating-title">
        <SectionTitle>Where to eat</SectionTitle>
      </div>

      <div className="Eating-section">
        <div className="Grid Grid--1offset">
          <div className="Grid-4column">
            <Location {...RestaurantData[0]} />
          </div>

          <div className="Grid-1column" />

          <div className="Grid-4column">
            <Location {...RestaurantData[1]} />
          </div>
        </div>
      </div>

      <div className="Eating-section">
        <div className="Grid Grid--1offset">
          <div className="Grid-4column">
            <Location {...RestaurantData[2]} />
          </div>

          <div className="Grid-1column" />

          <div className="Grid-4column">
            <Location {...RestaurantData[3]} />
          </div>
        </div>
      </div>

      <div className="Eating-section">
        <div className="Grid Grid--1offset">
          <div className="Grid-4column">
            <Location {...RestaurantData[4]} />
          </div>

          <div className="Grid-1column" />

          <div className="Grid-4column">
            <Location {...RestaurantData[5]} />
          </div>
        </div>
      </div>
    </Section>
  </div>
);

export default Eating;
