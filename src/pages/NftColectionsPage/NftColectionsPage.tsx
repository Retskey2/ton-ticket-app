import React from 'react';
import InputSearch from '@common/InputSearch/InputSearch';
import { SearchPlug } from '@common/plugs/SearchPlug/SearchPlug';
import styles from './NftCollectionPage.module.scss';

export const NftColectionsPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className='m-auto h-full'>
          <SearchPlug />
        </div>
        <InputSearch />
      </div>
    </div>
  );
};
