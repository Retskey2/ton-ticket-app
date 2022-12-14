import React from 'react';
import styles from './InputSearch.module.scss';

export default function InputSearch() {
  return <input placeholder='Search' type='text' className={styles.input_search} />;
}
