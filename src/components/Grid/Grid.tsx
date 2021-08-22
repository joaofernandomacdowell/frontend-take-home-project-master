import React from 'react';

import styles from './Grid.module.scss';

interface GridProps {
  children: JSX.Element | JSX.Element[];
}

export const Container = ({ children }: GridProps): JSX.Element => (
  <div className={styles.container}>{children}</div>
);

export const Row = ({ children }: GridProps): JSX.Element => (
  <div className={styles.row}>{children}</div>
);
