import React from 'react';

import '../css/Components/CFP';

import Text from './Text';
import Link from './Link';
import Button from './Button';
import Section from './Section';
import WhiteBox from './WhiteBox';

const CFP = () => (
  <Section>
    <div className="CFP">
      <WhiteBox id="cfp">
        <div className="CFP-title">
          Want to be part of this amazing lineup?
        </div>
        <Text alternative>
          Call for proposals is open until May 20th.
        </Text>
        <div className="CFP-actions">
          <Link noHover href="https://www.papercall.io/mirrorconf2017" target="_blank">
            <Button alternative>SUBMIT A TALK</Button>
          </Link>
        </div>
      </WhiteBox>
    </div>
  </Section>
);

export default CFP;
