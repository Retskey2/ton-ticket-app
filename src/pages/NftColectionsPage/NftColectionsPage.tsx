import React from 'react';
import InputSearch from '@common/InputSearch/InputSearch';
import { SearchPlug } from '@common/plugs/SearchPlug/SearchPlug';
import styles from './NftCollectionPage.module.scss';

export const NftColectionsPage: React.FC = () => {
  return (
    <div className={styles.wrapper_main}>
      <div className='relative flex h-full min-h-screen w-[100vw] max-w-3xl flex-col bg-[#10161F] p-4'>
        <div className='m-auto h-full'>
          <SearchPlug />
        </div>
        <InputSearch />
      </div>
    </div>
  );
};
