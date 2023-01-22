import { FC, useEffect, useState } from 'react';
import { useRequestCollection } from '@utils/api/hooks';
import styles from './SearchPlug.module.scss';
import TicketSvg from '@assets/icons/ticketIcon.svg';
import { TonConnectButton } from '@tonconnect/ui-react';

export const SearchPlug: FC = () => {
  const [error, setError] = useState(false);
  const { isError } = useRequestCollection();

  useEffect(() => {
    if (isError) setError(true);
  }, [isError]);

  return (
    <div className={styles.wrapper}>
      {!error ? (
        <>
          <TicketSvg />
          <h1>Enter collection address</h1>
          <p>
            Input address required collection <br /> for ticket validation.
          </p>
        </>
      ) : (
        <div>Your search returned no results</div>
      )}
      <TonConnectButton className='my-5' />
    </div>
  );
};
