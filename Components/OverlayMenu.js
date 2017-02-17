import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/OverlayMenu';

export default class OverlayMenu extends Component {
  static PropTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.any
  }

  render() {
    const className = classNames({
      'OverlayMenu': true,
      'is-open': this.props.isOpen
    });

    return <div className={className}>
      <div className="OverlayMenu-content">
        {this.props.children}
      </div>
    </div>
  }
}
