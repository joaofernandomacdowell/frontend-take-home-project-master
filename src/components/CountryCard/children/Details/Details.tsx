import { stringify } from 'node:querystring';
import React from 'react';

import styles from '../../CountryCard.module.scss';

interface Detail {
  [key: string]: string | number;
}

interface DetailsProps {
  details: Detail;
}

const captalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

const Details = ({ details }: DetailsProps): JSX.Element => {
  return (
    <>
      {Object.keys(details).map((key) => (
        <div key={key} className={styles.detailInfoWrapper}>
          <span className={styles.detailInfoKey}>
            {captalize(key)}:{' '}
          </span>
          <span className={styles.detailInfoValue}>
            {details[key]}
          </span>
        </div>
      ))}
    </>
  );
};

export default Details;
