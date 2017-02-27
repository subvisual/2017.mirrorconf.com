import React from 'react';

import '../css/Components/CFP';

import Text from './Text';
import Link from './Link';
import Button from './Button';
import Section from './Section';
import Mirrored from './Mirrored';

const CFP = () => (
  <Section>
    <Mirrored id="cfp" hide>
      <div className="CFP">
        <div className="CFP-title">
          Want to be part of this amazing lineup?
        </div>
        <Text alternative>
          We have prepared a program with activities that will get you to
          know better the beautiful north of Portugal.
        </Text>
        <div className="CFP-actions">
          <Link href="https://www.papercall.io/mirrorconf2017" target="_blank">
            <Button alternative>SUBMIT A TALK</Button>
          </Link>
        </div>
      </div>
    </Mirrored>
  </Section>
);

export default CFP;
