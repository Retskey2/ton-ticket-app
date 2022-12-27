import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRequestCollection } from '@utils/api/hooks';

import { Spinner } from '../Spinner/Spinner';

import SearchIcon from '@assets/icons/searchIcon.svg';
import LogoTon from '@assets/icons/logoTon.svg';
import styles from './InputSearch.module.scss';

export const InputSearch = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const { refetch, isFetching } = useRequestCollection(message);

  useEffect(() => {
    message.trim().length !== 0 && !isFetching ? setVisible(true) : setVisible(false);
  }, [message, isFetching]);

  const navigateToNftPage = async () => {
    const { data } = await refetch();
    console.log(data);

    if (!isFetching) navigate('/nft-page', { state: data.data });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value.trim());
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && visible) navigateToNftPage();
  };

  return (
    <div className={styles.wrapper}>
      <span>
        <SearchIcon />
      </span>
      <input placeholder='Search' type='text' onKeyUp={handleKeyPress} onChange={handleChange} value={message} />
      {visible ? (
        <div onClick={navigateToNftPage} className={styles.wrapperLogo}>
          <LogoTon />
        </div>
      ) : isFetching ? (
        <div className={styles.wrapperSpinner}>
          <Spinner />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};
