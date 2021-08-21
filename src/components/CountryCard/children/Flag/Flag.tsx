import React from 'react';

import styles from '../../CountryCard.module.scss';

interface FlagProps {
  imageUrl: string;
  alt: string;
}

const Flag = ({ imageUrl, alt }: FlagProps): JSX.Element => (
  <img className={styles.flag} src={imageUrl} alt={alt} />
);

export default Flag;
