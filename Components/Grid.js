import React from 'react';
import classNames from 'classnames';

const OverflowColumn = props => {
  const columnClassName = `Grid-${props.size - props.overflow}column`;
  const overflowColumnClassName = `Grid-overflow${props.size}Column`;

  return (
    <div className={columnClassName}>
      <div className={overflowColumnClassName}>
        {props.children}
      </div>
      <div className="Grid-invisibleColumn">
        {props.children}
      </div>
    </div>
  );
};

const Column = props => {
  if (props.overflow) {
    return OverflowColumn(props);
  }

  const className = `Grid-${props.size}column`;
  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

const Grid = props => {
  const className = classNames({
    Grid: true,
    [`Grid--${props.offset}offset`]: props.offset,
  });

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

export default Grid;

export { Grid, Column };
