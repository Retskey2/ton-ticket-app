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
    <div className={styles.validation_container}>
      <h1>Scan QR code</h1>
      <div className={styles.qrScan_container}>
        <QrScan className='qr-image-wrapper' facingMode='environment' delay={300} onError={handleError} onScan={handleScan} />
      </div>
    </div>
  );
};
