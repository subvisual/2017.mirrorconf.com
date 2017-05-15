import React from 'react';
import Link from '../Components/Link';
import Button from '../Components/Button';

export default [
  <Link uppercase key="1" href="/location/">Location</Link>,
  <Link uppercase key="1" href="/workshops/">Workshops</Link>,
  <Link uppercase key="2" href="/sponsoring.pdf" target="_blank">Sponsor Us</Link>,
  <span key="2" className="Navbar-cta">
    <Link noHover target="_blank" href="https://ti.to/subvisual/mirror-conf-2017">
      <Button>Buy Your Ticket</Button>
    </Link>
  </span>,
];
