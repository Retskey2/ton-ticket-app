import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRequestCollection } from '@utils/api/hooks';

import { Spinner } from '../Spinner/Spinner';

import LinkSvg from '@assets/icons/linkIcon.svg';
import styles from './InputSearch.module.scss';

export const InputSearch = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState<string>('');
  const { refetch, isFetching } = useRequestCollection(message);

  useEffect(() => {
    message.trim().length !== 0;
  }, [message, isFetching]);

  const navigateToNftPage = async () => {
    const { data } = await refetch();
    if (!isFetching) navigate('/nft-page', { state: data.data });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value.trim());
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') navigateToNftPage();
  };

  return (
    <div className={styles.wrapper}>
      <span>
        <LinkSvg />
      </span>
      <input placeholder='collection address' type='text' onKeyUp={handleKeyPress} onChange={handleChange} value={message} />
      {isFetching ? (
        <div className={styles.wrapperSpinner}>
          <Spinner />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};
