import React, { Component, PropTypes } from 'react';

import '../css/Components/Caption';

export default class Caption extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return <p className="Caption">
      {this.props.children}
    </p>;
  }
}
