import React, { Component, PropTypes } from 'react';

import '../css/Components/SubSectionTitle';

export default class SubSectionTitle extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return <h3 className="SubSectionTitle">
      {this.props.children}
    </h3>;
  }
}
