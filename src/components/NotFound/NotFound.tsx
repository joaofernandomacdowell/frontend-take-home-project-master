import React from 'react';

import styles from './NotFound.module.scss';

interface NotFoundProps {
  searchTerm: string;
}

const NotFound = ({ searchTerm }: NotFoundProps): JSX.Element => (
  <div className={styles.notFound}>
    <span className={styles.message}>
      No country was returned with term:{' '}
    </span>
    <span className={styles.searchTerm}>{`"${searchTerm}"`}</span>
  </div>
);

export default NotFound;
