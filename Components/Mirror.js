/* global document */

import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

import '../css/Components/Mirror';

export default class Mirror extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  componentDidMount = () => {
    _.each(document.querySelectorAll('.Mirror-original [data-mirror-hover]'), this.mirrorEventsOn);
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

  render() {
    return (
      <div className="Mirror">
        <div className="Mirror-original">
          {this.props.children}
        </div>
        <div className="Mirror-container">
          <div className="Mirror-cut" />
          <div className="Mirror-reflection">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
