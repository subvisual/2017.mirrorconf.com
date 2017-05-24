import React from 'react';
import classNames from 'classnames';
import Youtube from 'react-youtube';

import '../css/Components/Hero';
import '../css/Components/Grid';

import Section from './Section';
import TextTitle from './TextTitle';
import Mirrored from './Mirrored';
import SocialLinks from './SocialLinks';
import Video from './Video';

import HeroFallback from '../pages/hero.jpg';
import PlayIcon from '../images/play.svg';

const YoutubeVideoId = 'Subz_JTMWFo';
const youtubeOpts = {
  playerVars: {
    autoplay: 1,
    loop: 1,
    controls: 0,
    playlist: YoutubeVideoId,
  },
};

export default class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
  }

  componentDidMount() {}

  onYoutubePlay = () => {
    this.setState({ playing: true });
  };

  classes() {
    return classNames({
      Hero: true,
      'is-video-playing': this.state.playing,
    });
  }

  render() {
    return (
      <section className={this.classes()}>
        <div className="Hero-background">
          <Mirrored id="video-fallback" hide>
          </Mirrored>
          <Mirrored id="video" disable>
            <div className="Hero-videoWrapper">
              <Video
                className="Hero-video"
                src="https://fat.gfycat.com/BelatedOccasionalAmphibian.webm"
              >
                <img
                  className="Hero-videoFallback"
                  src={HeroFallback}
                  alt="MirrorConf 2016 video placeholder"
                />
              </Video>
            </div>
          </Mirrored>
          <Mirrored id="overlay" hide>
            <div className="Hero-backgroundOverlay" />
          </Mirrored>
        </div>

        <Section>
          <div className="Hero-foreground">
            <div className="Hero-content Grid Grid--1offset">
              <div className="Hero-title">
                <h1 className="Hero-headline">Mirror Conf 2017</h1>
                <h2 className="Hero-uvp">
                  For designers and front-end developers.
                </h2>
                <h3 className="Hero-date">
                  October 10 — 13, 2017<br />
                  Braga, Portugal
                </h3>

                <h4 className="Hero-fullDate">
                  Oct. 10 & 11 — workshops,<br />
                  12 & 13 — main conference
                </h4>
              </div>

              <div className="Hero-actions">
                <Mirrored id="button" hover>
                  <a
                    href="https://www.youtube.com/watch?v=JWa0PMXN7ZE"
                    className="Hero-playButton"
                    target="blank"
                  >
                    <img
                      src={PlayIcon}
                      alt="Play icon"
                      className="Hero-playButtonImage"
                    />
                    <div className="Hero-playButtonLabel">
                      <TextTitle>
                        1st edition<br />
                        best of
                      </TextTitle>
                    </div>
                  </a>
                </Mirrored>
              </div>
            </div>

            <div className="Hero-footer">
              <SocialLinks />
              <div className="Hero-footerSpace" />
              <TextTitle alternate>Follow us</TextTitle>
            </div>
          </div>
        </Section>
      </section>
    );
  }
}
