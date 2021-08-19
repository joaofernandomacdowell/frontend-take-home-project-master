import React from 'react';
import styles from './Details.module.scss';

interface Detail {
  [key: string]: string | number;
}

interface DetailsProps {
  name: string;
  details: Detail;
}

const Details = ({ name, details }: DetailsProps): JSX.Element => (
  <div className={styles.container}>
    <h3 className={styles.countryName}>{name}</h3>
    {Object.keys(details).map((key) => (
      <h5 key={key} className={styles.countryDetail}>
        {key}: <span>{details[key]}</span>
      </h5>
    ))}
  </div>
);

export default Details;
