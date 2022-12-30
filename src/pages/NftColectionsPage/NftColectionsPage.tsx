import { SearchPlug, InputSearch } from '@common';
import React from 'react';

import styles from './NftCollectionPage.module.scss';

export const NftColectionsPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main_background}>
        <div className='m-auto h-full'>
          <SearchPlug />
        </div>
        <InputSearch />
      </div>
    </div>
  );
};
