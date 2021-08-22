import React from 'react';

import styles from './Grid.module.scss';

interface GridProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export const Container = ({
  children,
  className = '',
}: GridProps): JSX.Element => (
  <div className={`${styles.container} ${className}`}>{children}</div>
);

export const Row = ({
  children,
  className = '',
}: GridProps): JSX.Element => (
  <div className={`${styles.row} ${className}`}>{children}</div>
);

export const Col = ({
  children,
  className = '',
}: GridProps): JSX.Element => (
  <div className={`${styles.container} ${className}`}>{children}</div>
);
