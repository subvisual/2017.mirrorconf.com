import React, { Component, PropTypes } from 'react';

import '../css/Components/SectionTitle';

export default class SectionTitle extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return <h2 className="SectionTitle">
      {this.props.children}
    </h2>;
  }
}
