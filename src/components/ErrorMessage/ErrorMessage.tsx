import React from 'react';

import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  searchTerm: string;
  apiError: boolean;
}

const ErrorMessage = ({
  searchTerm,
  apiError,
}: ErrorMessageProps): JSX.Element => (
  <div className={styles.container}>
    {apiError ? (
      <span className={styles.message}>
        Oops! An unexpected error seems to occured. Maybe you can try
        refreshing the page
      </span>
    ) : (
      <>
        <span className={styles.message}>
          No country was returned with term:{' '}
        </span>
        <span className={styles.searchTerm}>{`"${searchTerm}"`}</span>
      </>
    )}
  </div>
);

export default ErrorMessage;
