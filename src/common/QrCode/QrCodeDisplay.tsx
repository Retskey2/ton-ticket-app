import { SkeletonLoader } from '@common/SkeletonLoaders';
import useSizeScreenBlocks from '@utils/hooks/useSizeScreenBlock';
import QRCode from 'qrcode.react';
import { FC } from 'react';

interface IQrCodeDisplay {
  data: NftCollection | null;
  isLoading: boolean;
}

export const QrCodeDisplay: FC<IQrCodeDisplay> = ({ isLoading, data }) => {
  const { adaptiveSize } = useSizeScreenBlocks();
  return (
    <div className='row-start-3 flex flex-col items-center justify-center'>
      {isLoading ? (
        <SkeletonLoader count={1} width={adaptiveSize} height={adaptiveSize} />
      ) : (
        <QRCode
          className='rounded-xl p-2'
          includeMargin
          value={data?.metadata?.external_link}
          size={adaptiveSize}
          imageSettings={{ src: data?.metadata?.image, excavate: true, height: 70, width: 70 }}
        />
      )}
    </div>
  );
};
