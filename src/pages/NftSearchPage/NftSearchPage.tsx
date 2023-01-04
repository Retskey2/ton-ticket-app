import { SearchPlug, InputSearch } from '@common';
import React from 'react';

import styles from './NftSearchPage.module.scss';

export const NftColectionsPage: React.FC = () => {
  return (
    <div className={styles.nftSearch_container}>
      <SearchPlug />
      <InputSearch />
    </div>
  );
};
