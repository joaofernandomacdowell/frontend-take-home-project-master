import React from 'react';

import styles from '../../CountryCard.module.scss';

interface Detail {
  [key: string]: string | number;
}

interface DetailsProps {
  details: Detail;
  shouldOpen: boolean | (() => void);
}

const Details = ({
  details,
  shouldOpen,
}: DetailsProps): JSX.Element => {
  const detailsOpenedClass = shouldOpen ? styles.detailsOpened : null;

  return (
    <div className={`${styles.details} ${detailsOpenedClass}`}>
      {Object.keys(details).map((key) => (
        <div key={key} className={styles.detailInfoWrapper}>
          <span className={styles.detailInfoKey}>{key}: </span>
          <span className={styles.detailInfoValue}>
            {details[key]}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Details;
