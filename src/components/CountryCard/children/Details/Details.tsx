import React from 'react';
import styles from '../../CountryCard.module.scss';

interface Detail {
  [key: string]: string | number;
}

interface DetailsProps {
  name: string;
  details: Detail;
}

const Details = ({ name, details }: DetailsProps): JSX.Element => (
  <div className={styles.detailsContainer}>
    <h3 className={styles.countryName}>{name}</h3>
    {Object.keys(details).map((key) => (
      <div key={key} className={styles.countryDetail}>
        <span className={styles.infoKey}>{key}: </span>
        <span className={styles.infoValue}>{details[key]}</span>
      </div>
    ))}
  </div>
);

export default Details;
