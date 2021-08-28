import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Details from '../../components/CountryCard/children/Details';

import { AppState } from '../../redux/store';
import { Country, Currency } from '../../api/types';
import { Container, Row, Col } from '../../components/Grid';

import styles from './CountryProfile.module.scss';
import ErrorMessage from '../../components/ErrorMessage';

const CountryProfile = (): JSX.Element => {
  const { countryCode } = useParams<{ countryCode: string }>();

  const country = useSelector(({ countriesState }: AppState) => {
    return countriesState?.countries?.filter(
      (item: Country) => item.alpha3Code === countryCode
    );
  });

  if (!country.length) {
    return <ErrorMessage />;
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
            <Row className={styles.detailsRow}>
              <Col className={styles.detailsCol}>
                <Details
                  details={{
                    population: population.toLocaleString(),
                    capital,
                    region,
                    'native name': nativeName,
                  }}
                />
              </Col>
              <Col className={styles.detailsCol}>
                <Details
                  details={{
                    subregion,
                    languages: languages
                      .map((language) => language.name)
                      .join(', '),
                    currencies: currencies
                      .map((currency: Currency) => currency.name)
                      .join(', '),
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
