import cn from 'classnames';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import ArrowDownSvg from '@assets/icons/arrowDown.svg';
import SelectSwapSvg from '@assets/icons/selectSwap.svg';
import CopySvg from '@assets/icons/copyIcon.svg';
import CancelSvg from '@assets/icons/cancelIcon.svg';

import styles from './NftPage.module.scss';

import { useRequestCollection } from '@utils/api/hooks';
import { CopyPath, QrCodeDisplay, SkeletonLoader } from '@common';

export const NftPage = () => {
  const [visible, setVisible] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [data, setData] = useState<NftCollection | null>(null);

  const { state } = useLocation();
  const { address } = useParams();
  const navigate = useNavigate();

  const { refetch, isLoading } = useRequestCollection(address);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await refetch();
      setData(data.data);
    };
    if (!data) {
      fetchData().catch(console.error);
    } else {
      setData(state);
    }
  }, []);

  return (
    <div className={cn(styles.nft_container, { ['bg-white']: fullscreen })}>
      <div className={cn(styles.header_container, { ['hidden']: fullscreen })}>
        <div className={styles.title} onClick={() => setVisible(!visible)}>
          {isLoading ? (
            <SkeletonLoader width={200} />
          ) : (
            <>
              <h1>{data?.metadata?.name} </h1>
              <ArrowDownSvg />
            </>
          )}
        </div>
        {visible && (
          <ul className={styles.popup}>
            <li onClick={() => navigate('/')}>
              <span>Select another collection</span>
              <SelectSwapSvg />
            </li>
            <li>
              <CopyPath />
              <CopySvg />
            </li>
          </ul>
        )}
      </div>
      <div className={cn(styles.subtitle, { ['hidden']: fullscreen })}>
        <h1>QR code for validation</h1>
        <span>
          Show this is QR code to visitor <br /> to verify ticket ownership.
        </span>
      </div>
      <QrCodeDisplay data={data} isLoading={isLoading} />
      <div className={cn(styles.fullscreen_handler, { ['hidden']: fullscreen })} onClick={() => setFullscreen(!fullscreen)}>
        Tap to show on full screen
      </div>
      <div className={styles.footer_container}>
        {fullscreen ? (
          <div className={styles.cancel_wrapper} onClick={() => setFullscreen(!fullscreen)}>
            <CancelSvg />
          </div>
        ) : (
          <button onClick={() => navigate('/validate-page')}>Scan QR code</button>
        )}
      </div>
    </div>
  );
};
