import React from 'react';
import Link from '../Components/Link';
import Button from '../Components/Button';

export default [
  <Link uppercase key="1" href="/sponsoring.pdf" target="_blank">Sponsor Us</Link>,
  <span key="2" className="Navbar-cta">
    <Link target="_blank" href="https://ti.to/subvisual/mirror-conf-2017">
      <Button>Buy Your Early Bird</Button>
    </Link>
  </span>,
];