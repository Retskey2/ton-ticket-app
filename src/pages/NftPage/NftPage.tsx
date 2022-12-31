import classNames from 'classnames';
import QRCode from 'qrcode.react';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import ArrowDownSvg from '@assets/icons/arrowDown.svg';
import SelectSwapSvg from '@assets/icons/selectSwap.svg';
import CopySvg from '@assets/icons/copyIcon.svg';
import CancelSvg from '@assets/icons/cancelIcon.svg';

import styles from './NftPage.module.scss';
import { useWindowSize } from 'usehooks-ts';
import { useRequestCollection } from '@utils/api/hooks';
import CopyPath from '@common/CopyPath/CopyPath';

export const NftPage = () => {
  const [visible, setVisible] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [sizeScreen, setSizeScreen] = useState(0);
  const [data, setData] = useState<NftCollection | undefined>(undefined);

  const handleFullscreen = () => setFullscreen(!fullscreen);
  const handlerVisible = () => setVisible(!visible);

  const { width } = useWindowSize();

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

  useEffect(() => {
    if (width <= 280) setSizeScreen(220);
    if (width > 281 && width <= 320) setSizeScreen(240);
    if (width > 321 && width < 420) setSizeScreen(300);
    if (width >= 420 && width < 720) setSizeScreen(400);
    if (width >= 720) setSizeScreen(500);
  }, [width]);

  if (isLoading) return <div>Загрузка..</div>;

  return (
    <div className={styles.wrapper}>
      <div
        className={classNames([styles.main_background], {
          [styles.bgWhite]: fullscreen
        })}
      >
        <div
          className={classNames([styles.header_container], {
            ['hidden']: fullscreen
          })}
        >
          <div className={styles.title} onClick={handlerVisible}>
            <h1>{data?.metadata?.name} </h1>
            <ArrowDownSvg />
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
        <div
          className={classNames([styles.subtitle], {
            ['hidden']: fullscreen
          })}
        >
          <h1>QR code for validation</h1>
          <span>
            Show this is QR code to visitor <br /> to verify ticket ownership.
          </span>
        </div>
        <div className={styles.qr_container}>
          <QRCode
            className='rounded-xl'
            value={data?.metadata?.external_link}
            size={sizeScreen}
            includeMargin
            imageSettings={{ src: data?.metadata?.image, excavate: true, height: 70, width: 70 }}
          />
          <span
            className={classNames([styles.fullscreen_handler], {
              ['invisible']: fullscreen
            })}
            onClick={handleFullscreen}
          >
            Tap to show on full screen
          </span>
        </div>
        <div className={styles.footer_container}>
          {fullscreen ? (
            <div className={styles.cancel_wrapper} onClick={handleFullscreen}>
              <CancelSvg />
            </div>
          ) : (
            <button onClick={() => navigate('/validate-page')}>Scan QR code</button>
          )}
        </div>
      </div>
    </div>
  );
};
