import { useState } from 'react';
import styles from './ValidationPage.module.scss';

export const ValidationPage = () => {
  const [data, setData] = useState('No result');

  return (
    <div className={styles.wrapper}>
      <div className={styles.main_background}>
        <div className='my-auto'></div>
      </div>
    </div>
  );
};
