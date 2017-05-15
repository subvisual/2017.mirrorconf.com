import React, { PropTypes } from 'react';

import '../css/Components/CallToAction';

import Text from './Text';
import Link from './Link';
import Button from './Button';
import Section from './Section';
import WhiteBox from './WhiteBox';

const CallToAction = ({ title, text, href, buttonText }) => (
  <Section>
    <div className="CallToAction">
      <WhiteBox>
        <div className="CallToAction-title">
          {title}
        </div>
        <Text alternative>
          {text}
        </Text>
        <div className="CallToAction-actions">
          <Link noHover href={href} target="_blank">
            <Button alternative>{buttonText}</Button>
          </Link>
        </div>
      </WhiteBox>
    </div>
  </Section>
);

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default CallToAction;
