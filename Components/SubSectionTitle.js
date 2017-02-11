import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/SubSectionTitle';

export default class SubSectionTitle extends Component {
  static propTypes = {
    children: PropTypes.any,
    italic: PropTypes.bool,
    alternate: PropTypes.bool
  }

  render() {
    const className = classNames({
      'SubSectionTitle': true,
      'SubSectionTitle--italic': this.props.italic,
      'SubSectionTitle--alternate': this.props.alternate
    });

    return <h3 className={className}>
      {this.props.children}
    </h3>;
  }
}
