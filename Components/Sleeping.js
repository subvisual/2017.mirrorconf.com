import React from 'react';

import '../css/Components/Grid';
import '../css/Components/Sleeping';

import Section from '../Components/Section';
import SectionTitle from '../Components/SectionTitle';
import Location from '../Components/Location';

const HotelData = [
  {
    name: 'Hotel Dona Sofia',
    stars: 3,
    singlePrice: 40,
    doublePrice: 50,
    minutes: 4,
    address: 'Largo de S. João do Souto 131, 4700-326 Braga',
    addressUrl: 'https://www.google.pt/maps/place/Hotel+Dona+Sofia/@41.550005,-8.425419,16z/data=!4m5!3m4!1s0xd24fec240d0bfe5:0x2801b2f0a4ff2620!8m2!3d41.5497425!4d-8.4255273?hl=pt-PT',
    phone: '+351 253 263 160',
    email: 'info@hoteldonasofia.com',
    url: 'http://hoteldonasofia.com/hotelds/',
  },
  {
    name: 'Hotel Mercure Braga Centro',
    stars: 4,
    singlePrice: 67,
    doublePrice: 72,
    address: 'Praceta João XXI, 4715-036 Braga',
    addressUrl: 'https://www.google.pt/maps/dir/Teatro+Circo+de+Braga+Sa,+Avenida+da+Liberdade,+Braga/Hotel+Mercure+Braga+Centro,+Braga/@41.5481066,-8.4228745,17z/am=t/data=!4m13!4m12!1m5!1m1!1s0xd24e87650169dfd:0x46276da956d09542!2m2!1d-8.4223874!2d41.5497678!1m5!1m1!1s0xd24fec735e5412b:0x9e0d99e2816b30f6!2m2!1d-8.4197941!2d41.5464976?hl=pt-PT',
    minutes: 5,
    phone: '+351 253 086 587',
    email: 'h8308@accord.com',
    url: 'http://www.mercure.com/gb/hotel-8308-mercure-braga-centro/index.shtml',
  },
  {
    name: 'Hotel IBIS Braga Centro',
    stars: 2,
    singlePrice: 45,
    doublePrice: 52,
    address: 'Rua do Carmo 38, 4700-309 Braga',
    addressUrl: 'https://www.google.pt/maps/dir/Teatro+Circo+de+Braga+Sa,+Avenida+da+Liberdade,+Braga/R.+do+Carmo+38,+4700-314+Braga/@41.5513107,-8.4261164,17z/am=t/data=!4m13!4m12!1m5!1m1!1s0xd24e87650169dfd:0x46276da956d09542!2m2!1d-8.4223874!2d41.5497678!1m5!1m1!1s0xd24fee9a420c607:0x6ef4639c49c2d763!2m2!1d-8.4257641!2d41.5534043?hl=pt-PT',
    minutes: 7,
    phone: '+351 253 204 800',
    email: 'h1802@accor.com',
    url: 'http://www.ibis.com/gb/hotel-1802-ibis-braga-centro/index.shtml',
  },
  {
    name: 'Hotel IBIS Budget Braga Centro',
    stars: 2,
    singlePrice: 34.5,
    doublePrice: 38,
    address: 'Avenida Da Liberdade 96  Sao Jose De Sao Lazaro, 4715-037 Braga',
    addressUrl: 'https://www.google.pt/maps/dir/Teatro+Circo+de+Braga+Sa,+Avenida+da+Liberdade,+Braga/Hotel+ibis+budget+Braga+Centro,+Avenida+da+Liberdade/@41.547477,-8.4227654,17z/am=t/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd24e87650169dfd:0x46276da956d09542!2m2!1d-8.4223874!2d41.5497678!1m5!1m1!1s0xd24fec76f686f75:0x85ac1f205c41d442!2m2!1d-8.419154!2d41.545131?hl=pt-PT',
    minutes: 7,
    phone: '+351 253 614 500',
    email: 'h9042@accord.com',
    url: 'http://www.accorhotels.com/gb/hotel-9042-ibis-budget-braga-centro/index.shtml',
  },
  // {
  //   name: 'Hotel IBIS Braga Centro',
  //   stars: 2,
  //   singlePrice: 37.5,
  //   doublePrice: 44,
  //   address: 'Rua Dom Frei Caetano Brandão, 169, 4700-031, Braga',
  //   minutes: 6,
  //   phone: '+351 253 086 587',
  //   email: 'h8308@accord.com',
  //   url: '#',
  // },
];

const Sleeping = () => (
  <div className="Sleeping">
    <Section>
      <div className="Sleeping-title">
        <SectionTitle>Where to stay</SectionTitle>
      </div>

      <div className="Sleeping-section">
        <div className="Grid Grid--1offset">
          <div className="Grid-4column">
            <Location {...HotelData[0]} />
          </div>

          <div className="Sleeping-emptyColumn">
            <div className="Grid-1column" />
          </div>

          <div className="Grid-4column">
            <Location {...HotelData[1]} />
          </div>
        </div>
      </div>

      <div className="Sleeping-section">
        <div className="Grid Grid--1offset">
          <div className="Grid-4column">
            <Location {...HotelData[2]} />
          </div>

          <div className="Sleeping-emptyColumn">
            <div className="Grid-1column" />
          </div>

          <div className="Grid-4column">
            <Location {...HotelData[3]} />
          </div>
        </div>
      </div>
    </Section>
  </div>
);

export default Sleeping;
