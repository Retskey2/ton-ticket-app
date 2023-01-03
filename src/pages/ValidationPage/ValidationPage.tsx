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
    <>
      <div className='m-auto'>
        <div className='mb-6 text-center text-2xl font-bold'>Scan QR code</div>
        <div className='sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px]'>
          <QrScan className='qr-image-wrapper' facingMode='environment' delay={300} onError={handleError} onScan={handleScan} />
        </div>
      </div>
    </>
  );
};
