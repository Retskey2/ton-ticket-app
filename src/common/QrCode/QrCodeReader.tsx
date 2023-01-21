import useSizeScreenBlocks from '@utils/hooks/useSizeScreenBlock';
import { useState } from 'react';
import QrScan from 'react-qr-reader';

export const QrCodeReader = () => {
  const { adaptiveSize } = useSizeScreenBlocks();
  const [qrScanner, setQRscanner] = useState('No result');

  const handleScan = (data: string | null) => {
    if (data) {
      setQRscanner(data);
    }
  };
  const handleError = (err: string) => {
    console.error(err);
  };

  return (
    <div style={{ width: adaptiveSize }}>
      <QrScan className='qr-image-wrapper' facingMode='environment' delay={300} onError={handleError} onScan={handleScan} />
    </div>
  );
};
