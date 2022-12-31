import { useEffect, useState } from 'react';
import styles from './ValidationPage.module.scss';
import QrScan from 'react-qr-reader';
import { useWindowSize } from 'usehooks-ts';

export const ValidationPage = () => {
  const [qrscan, setQrscan] = useState('No result');
  const [sizeScreen, setSizeScreen] = useState(0);
  const { width } = useWindowSize();

  const handleScan = (data: string | null) => {
    if (data) {
      setQrscan(data);
    }
  };
  const handleError = (err: string) => {
    console.error(err);
  };

  useEffect(() => {
    if (width <= 280) setSizeScreen(220);
    if (width > 281 && width <= 320) setSizeScreen(240);
    if (width > 321 && width < 420) setSizeScreen(300);
    if (width >= 420 && width < 720) setSizeScreen(400);
    if (width >= 720) setSizeScreen(500);
  }, [width]);

  console.log(sizeScreen, width);

  return (
    <div className={styles.wrapper}>
      <div className={styles.main_background}>
        <div className='m-auto'>
          <div className='font-bold text-2xl mb-6'>Scan QR code</div>
          <div className={` w-[${sizeScreen}px]`}>
            <QrScan className='qr-image-wrapper' facingMode='environment' delay={300} onError={handleError} onScan={handleScan} />
          </div>
        </div>
        <p>{qrscan}</p>
      </div>
    </div>
  );
};
