import { useEffect, useState } from 'react';
import styles from './InputSearch.module.scss';
import LogoTon from '@assets/icons/logoTon.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useRequestCollection } from '../../utils/api/hooks';
import { Spinner } from '../Spinner/Spinner';

export default function InputSearch() {
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
        <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10.5353 11.596C9.42677 12.475 8.02469 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5C13 8.02469 12.475 9.42677 11.596 10.5353L13.7803 12.7197C14.0732 13.0126 14.0732 13.4874 13.7803 13.7803C13.4874 14.0732 13.0126 14.0732 12.7197 13.7803L10.5353 11.596ZM11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5Z'
            fill='#8994A3'
          />
        </svg>
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
}
