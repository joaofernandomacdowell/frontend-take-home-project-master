import React from 'react';

import styles from './Header.module.scss';
import { Container, Row } from '../../components/Grid';

const Header = (): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <Row>
            <h1 className={styles.title}>Countries Rest API</h1>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
