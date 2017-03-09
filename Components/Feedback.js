import React from 'react';
import _ from 'lodash';

import '../css/Components/Feedback';
import quote from '../images/quote.svg';
import feedbackText from '../data/feedback';

import FeedbackSlider from './FeedbackSlider';
import Section from './Section';
import TextTitle from './TextTitle';
import WhiteBox from './WhiteBox';

const feedbackFrom = (author, index) => (
  <div key={index}>
    <div className="Feedback-text">
      {author.text}
    </div>

    <div className="Feedback-author">
      <TextTitle alternate>
        {author.name}
      </TextTitle>
    </div>
  </div>
);

const renderFeedback = () => _.map(feedbackText, feedbackFrom);

const Feedback = () => (
  <Section>
    <div className="Feedback">
      <WhiteBox id="feedback">
        <div className="Feedback-quote">
          <img src={quote} alt="Quote icon" />
        </div>

        <FeedbackSlider>
          {renderFeedback()}
        </FeedbackSlider>
      </WhiteBox>
    </div>
  </Section>
);

export default Feedback;
