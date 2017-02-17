import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/Link';

export default class Link extends Component {
  static propTypes = {
    children: PropTypes.any,
    href: PropTypes.string,
    uppercase: PropTypes.bool,
  };

  static defaultProps = {
    href: '#',
    uppercase: false,
  };

  render() {
    const className = classNames('Link', {
      'Link--uppercase': this.props.uppercase,
    });

    return <a className={className} href={this.props.href}>{this.props.children}</a>
  }
}
