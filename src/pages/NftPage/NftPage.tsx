import classNames from 'classnames';
import QRCode from 'qrcode.react';

import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ArrowDownSvg from '@assets/icons/ArrowDown.svg';
import SelectSwapSvg from '@assets/icons/SelectSwap.svg';
import CancelSvg from '@assets/icons/cancelIcon.svg';

import styles from './NftPage.module.scss';

export const NftPage = () => {
  const [visible, setVisible] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const { state } = useLocation();
  const navigate = useNavigate();

  const handleFullscreen = () => setFullscreen(!fullscreen);
  const handlerVisible = () => setVisible(!visible);

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
            size={350}
            value={state.metadata.external_link}
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
