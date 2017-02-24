import React from 'react';

import '../css/Components/CFP';

import Text from './Text';
import Button from './Button';
import Section from './Section';
import Mirrored from './Mirrored';

const CFP = () => (
  <Section>
    <Mirrored disabled>
      <div className="CFP">
        <div className="CFP-title">
          Want to be part of this amazing lineup?
        </div>
        <Text alternative>
          We have prepared a program with activities that will get you to
          know better the beautiful north of Portugal.
        </Text>
        <div className="CFP-actions">
          <Button alternative>SUBMIT A TALK</Button>
        </div>
      </div>
    </Mirrored>
  </Section>
);

export default CFP;
