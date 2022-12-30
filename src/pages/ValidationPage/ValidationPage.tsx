import { useState } from 'react';
import styles from './ValidationPage.module.scss';
import QrScan from 'react-qr-reader';

export const ValidationPage = () => {
  const [qrscan, setQrscan] = useState('No result');
  const handleScan = (data: string | null) => {
    if (data) {
      setQrscan(data);
    }
  };
  const handleError = (err: string) => {
    console.error(err);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.main_background}>
        <div className='m-auto'>
          <QrScan facingMode='user' delay={300} onError={handleError} onScan={handleScan} style={{ height: 360, width: 440 }} />
        </div>
        <p>{qrscan}</p>
      </div>
    </div>
  );
};
