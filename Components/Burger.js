import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/Burger';

export default class Burger extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    openLabel: PropTypes.string.isRequired,
    closeLabel: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  onClick = () => {
    this.setState({ isOpen: !this.state.isOpen });

    if (this.props.onClick)
      this.props.onClick();
  }

  renderLabel = () => {
    const { isOpen } = this.state;

    if (isOpen)
      return <label className="Burger-closeLabel">{this.props.closeLabel}</label>;

    return <label className="Burger-openLabel">{this.props.openLabel}</label>;
  }

  render() {
    const { isOpen } = this.state;
    const className = classNames({
      'Burger': true,
      'is-open': isOpen
    });

    return <a onClick={this.onClick} className={className}>
      <div className="Burger-line"/>
      <div className="Burger-line"/>
      <div className="Burger-line"/>
      {this.renderLabel()}
    </a>;
  }
}
