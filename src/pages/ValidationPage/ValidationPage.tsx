import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import styles from './ValidationPage.module.scss';

export const ValidationPage = () => {
  const [data, setData] = useState('No result');

  return (
    <div className={styles.wrapper}>
      <div className={styles.main_background}>
        <div className='my-auto'>
          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
            style={{ width: '100%' }}
          />
          <p>{data}</p>
        </div>
      </div>
    </div>
  );
};
