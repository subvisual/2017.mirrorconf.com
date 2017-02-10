import React, { Component, PropTypes } from 'react';

import '../css/Components/Title';

export default class Title extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return <h1 className="Title">
      {this.props.children}
    </h1>;
  }
}
