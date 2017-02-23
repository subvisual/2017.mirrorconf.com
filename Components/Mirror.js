/* global document */

import React, { Component, PropTypes } from 'react';

import '../css/Components/Mirror';

import Section from './Section';

export default class Mirror extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  componentDidMount = () => {
    document
      .querySelectorAll('.Mirror-original [data-mirror-hover]')
      .forEach(this.mirrorEventsOn);
  }

  mirrorEventsOn = (el) => {
    const reflection = document.querySelector(`.Mirror-reflection [data-mirror-id=${el.dataset.mirrorId}]`);

    el.addEventListener('mouseenter', () => reflection.classList.add('hover'));
    el.addEventListener('mouseleave', () => reflection.classList.remove('hover'));
  }

  render() {
    return (
      <div className="Mirror">
        <div className="Mirror-original">
          {this.props.children}
        </div>
        <div className="Mirror-container">
          <div className="Mirror-reflection">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
