import React from 'react';

import styles from './Grid.module.scss';

interface GridProps {
  type: string;
  children: JSX.Element;
}

const Grid = ({ children, type }: GridProps): JSX.Element => {
  let className = '';
  switch (type) {
    case 'container':
      className = styles.container;
      break;
    case 'row':
      className = styles.row;
      break;
    default:
      return <>{children}</>;
  }

  return <div className={className}>{children}</div>;
};

export default Grid;
