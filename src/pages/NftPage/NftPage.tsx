import QRCode from 'qrcode.react';
import { useLocation } from 'react-router-dom';
import image from '@assets/image.png';

export const NftPage = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div className='grid w-screen justify-center'>
      <div className='w-[100vw] max-w-3xl'>
        <div className='flex h-full min-h-screen w-full flex-col items-center bg-[#10161F] p-4'>
          <h1 className='mt-6 mb-4 text-center text-xl'>Title this item from collection</h1>
          <div className='m-auto'>
            <QRCode
              size={300}
              value='http://facebook.github.io/react/'
              includeMargin
              imageSettings={{ src: image, excavate: true, height: 60, width: 60 }}
            />
          </div>
          <button>Scan QR code</button>
        </div>
      </div>
    </div>
  );
};
