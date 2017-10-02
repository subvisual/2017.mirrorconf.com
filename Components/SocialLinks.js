import React from 'react';

import TwitterLogo from '../images/twitter.svg';
import YoutubeLogo from '../images/youtube.svg';
import FacebookLogo from '../images/facebook.svg';
import LinkedInLogo from '../images/linkedin.svg';
import GooglePlusLogo from '../images/google.svg';

import '../css/Components/SocialLinks';

const renderSocialLink = (href, alt, img) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="Footer-socialLink">
    <img alt={alt} src={img} />
  </a>
);

export default () => (
  <div className="SocialLinks">
    {renderSocialLink('https://www.facebook.com/Mirror-Conf-578187519024917/', 'Facebook Logo', FacebookLogo)}
    {renderSocialLink('https://twitter.com/MirrorConf', 'Twitter Logo', TwitterLogo)}
    {renderSocialLink('https://www.youtube.com/channel/UCDez53TT1_v3jr3lGv-QhKw', 'Youtube Logo', YoutubeLogo)}
    {renderSocialLink('https://www.linkedin.com/company-beta/11050811/', 'LinkedIn Logo', LinkedInLogo)}
    {renderSocialLink('https://plus.google.com/112646536485978790546', 'Google+ Logo', GooglePlusLogo)}
  </div>
);
