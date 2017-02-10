import React, { Component, PropTypes } from 'react';

import '../css/Components/Text';

export default class Text extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return <p className="Text">
      {this.props.children}
    </p>;
  }
}
