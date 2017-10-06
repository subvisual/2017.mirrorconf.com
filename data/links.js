import React from 'react';
import Link from '../Components/Link';
import Button from '../Components/Button';

export default [
  <Link uppercase key="1" href="/location/">
    Location
  </Link>,
  <Link uppercase key="2" href="/speakers/">
    Speakers
  </Link>,
  <Link uppercase key="3" href="/workshops/">
    Workshops
  </Link>,
  <Link uppercase key="4" href="/schedule/">
    Schedule
  </Link>,
  <Link uppercase key="5" href="/sponsoring.pdf" target="_blank">
    Sponsor Us
  </Link>,
  <span key="5" className="Navbar-cta">
    <Button disabled>Buy Your Ticket</Button>
  </span>,
];
