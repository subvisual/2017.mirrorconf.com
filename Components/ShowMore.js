import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Button from './Button';
import '../css/Components/ShowMore';

class ShowMore extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  handleClick = () => {
    this.setState({ expanded: true });
  }

  render() {
    const classes = classNames({
      ShowMore: true,
      'is-expanded': this.state.expanded,
    });

    return (
      <div className={classes}>
        <div className="ShowMore-content">
          {this.props.children}
          <div className="ShowMore-overlay" />
        </div>
        <div className="ShowMore-end">
          <div className="ShowMore-button">
            <Button transparent onClick={this.handleClick}>Show more</Button>
          </div>
          <div className="ShowMore-line" />
        </div>
      </div>
    );
  }
}

export default ShowMore;
