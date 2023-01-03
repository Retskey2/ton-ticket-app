import { SearchPlug, InputSearch } from '@common';
import React from 'react';

import styles from './NftCollectionPage.module.scss';

export const NftColectionsPage: React.FC = () => {
  return (
    <div className='flex flex-col justify-between h-full p-4'>
      <SearchPlug />
      <InputSearch />
    </div>
  );
};
