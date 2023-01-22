import { SearchPlug, InputSearch } from '@common';

import styles from './NftSearchPage.module.scss';

export const NftSearchPage = () => {
  return (
    <div className={styles.nftSearch_container}>
      <SearchPlug />
      <InputSearch />
    </div>
  );
};
