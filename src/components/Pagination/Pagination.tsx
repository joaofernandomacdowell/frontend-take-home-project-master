import React from 'react';

import styles from './Pagination.module.scss';

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (number: number) => void;
}

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
}: PaginationProps): JSX.Element => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((number: number) => (
          <li key={number} className={styles.pageItem}>
            <a
              href="#!"
              className={styles.pageLink}
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
