import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/Title';

export default class Title extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    const className = classNames({
      'Title': true
    });

    return <h1 className={className}>
      {this.props.children}
    </h1>;
  }
}
