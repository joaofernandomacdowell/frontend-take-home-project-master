import React from 'react';

import styles from './Flag.module.scss';

interface FlagProps {
  imageUrl: string;
  alt: string;
}

const Flag = ({ imageUrl, alt }: FlagProps): JSX.Element => (
  <div className={styles.container}>
    <img src={imageUrl} alt={alt} />
  </div>
);

export default Flag;
