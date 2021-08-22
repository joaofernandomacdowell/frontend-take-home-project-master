import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Details from '../../components/CountryCard/children/Details';

import { AppState } from '../../redux/store';
import { Country, Currency } from '../../api/types';
import { Container, Row, Col } from '../../components/Grid';

import styles from './CountryProfile.module.scss';

const CountryProfile = (): JSX.Element => {
  const { countryCode } = useParams<{ countryCode: string }>();

  const country = useSelector((state: AppState) => {
    return state?.countries?.countries?.filter(
      (item: Country) => item.alpha3Code === countryCode
    );
  });

  if (!country.length) {
    return null;
  }

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    currencies,
    languages,
    capital,
    flag,
  } = country[0];

  return (
    <Container>
      <Row>
        <div className={styles.box}>
          <Link to="/" className={styles.backButton}>
            Back
          </Link>
        </div>
      </Row>

      <Row>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <img src={flag} alt={name} />
          </div>
          <div className={styles.contentRight}>
            <h2>{name}</h2>
            <Row>
              <Col>
                <Details
                  details={{
                    Population: population.toLocaleString(),
                    Region: region,
                    SubRegion: subregion,
                    Capital: capital,
                    'Native name': nativeName,
                  }}
                />
              </Col>
              <Col>
                <Details
                  details={{
                    Languages: languages
                      .map((language) => language.name)
                      .join(', '),
                    Currencies: currencies
                      .map((currency: Currency) => currency.name)
                      .join(', '),
                    SubRegion: subregion,
                    Capital: capital,
                  }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default CountryProfile;
