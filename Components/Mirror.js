/* global document */

import React, { Component, PropTypes } from 'react';

import '../css/Components/Mirror';

export default class Mirror extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  componentDidMount = () => {
    document
      .querySelectorAll('.Mirror-original [data-mirror-hover]')
      .forEach(this.mirrorEventsOn);

    document
      .querySelectorAll('.Mirror-original [data-mirror-hide]')
      .forEach(this.hideElementOnMirror);
  }

  findReflectedElement = (el) => {
    const id = el.dataset.mirrorId;
    return document.querySelector(`.Mirror-reflection [data-mirror-id=${id}]`);
  }

  mirrorEventsOn = (el) => {
    const reflection = this.findReflectedElement(el);

    el.addEventListener('mouseenter', () => reflection.classList.add('hover'));
    el.addEventListener('mouseleave', () => reflection.classList.remove('hover'));
  }

  hideElementOnMirror = (el) => {
    const reflection = this.findReflectedElement(el);

    reflection.style.visibility = 'hidden';
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
