import React, { PropTypes } from 'react';
import Slider from 'react-slick';

import '../css/Components/FeedbackSlider';
import '../node_modules/slick-carousel/slick/slick-theme.scss';
import '../node_modules/slick-carousel/slick/slick.scss';

const FeedbackSlider = ({ children }) => {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    dotsClass: 'FeedbackSlider-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="FeedbackSlider">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};

FeedbackSlider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FeedbackSlider;
