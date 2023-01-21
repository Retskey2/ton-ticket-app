import { QrCodeReader } from '@common/QrCode/QrCodeReader';
import styles from './ValidationPage.module.scss';

export const ValidationPage = () => {
  return (
    <div className={styles.validation_container}>
      <h1>Scan QR code</h1>
      <QrCodeReader />
    </div>
  );
};
