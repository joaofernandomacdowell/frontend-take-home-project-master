import React from 'react';

import styles from './Loading.module.scss';

const Loading = (): JSX.Element => {
  return (
    <div className={styles.loading}>
      <span>Loading Countries...</span>
    </div>
  );
};

export default Loading;
