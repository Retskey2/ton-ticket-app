import { FC, PropsWithChildren } from 'react';
import styles from './Layout.module.scss';

type Props = {};

export const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main_background}>{children}</div>
    </div>
  );
};
