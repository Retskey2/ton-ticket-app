import classNames from 'classnames';
import QRCode from 'qrcode.react';

import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ArrowDownSvg from '@assets/icons/arrowDown.svg';
import SelectSwapSvg from '@assets/icons/selectSwap.svg';
import CancelSvg from '@assets/icons/cancelIcon.svg';

import styles from './NftPage.module.scss';
import useWindowSize from '@utils/hooks/useWindowSize';

export const NftPage = () => {
  const [visible, setVisible] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const { width } = useWindowSize();

  const { state } = useLocation();
  const navigate = useNavigate();

  const handleFullscreen = () => setFullscreen(!fullscreen);
  const handlerVisible = () => setVisible(!visible);

  const sizeQrCode = (width: number) => {
    if (width > 319 && width < 322) return 200;

    if (width >= 322 && width < 420) return 300;

    if (width >= 420 && width < 720) return 400;
    else return 500;
  };

  console.log(sizeQrCode(width), width);

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
            <h1>{state.metadata.name}</h1>
            <ArrowDownSvg />
          </div>
          {visible && (
            <div onClick={() => navigate('/')} className={styles.popup}>
              <span>Select another collection</span>
              <SelectSwapSvg />
            </div>
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
            value={state.metadata.external_link}
            size={sizeQrCode(width)}
            includeMargin
            imageSettings={{ src: state.metadata.image, excavate: true, height: 70, width: 70 }}
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
