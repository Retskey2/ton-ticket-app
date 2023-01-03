import React, { FC, PropsWithChildren } from 'react';
import styles from './Layout.module.scss';

type Props = {};

const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main_background}>{children}</div>
    </div>
  );
};

export default Layout;
