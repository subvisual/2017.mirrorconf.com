import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import '../css/Components/Burger';

export default class Burger extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    openLabel: PropTypes.string.isRequired,
    closeLabel: PropTypes.string.isRequired,
  }

  renderLabel = () => {
    const { isOpen } = this.props;

    if (isOpen) { return <span className="Burger-closeLabel">{this.props.closeLabel}</span>; }

    return <span className="Burger-openLabel">{this.props.openLabel}</span>;
  }

  render() {
    const { isOpen, onClick } = this.props;
    const className = classNames({
      Burger: true,
      'is-open': isOpen,
    });

    return (
      <button onClick={onClick} className={className} >
        <div className="Burger-line" />
        <div className="Burger-line" />
        <div className="Burger-line" />
        {this.renderLabel()}
      </button>
    );
  }
}
