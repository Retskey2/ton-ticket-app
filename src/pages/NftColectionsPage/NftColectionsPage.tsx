import React from 'react';
import { SearchPlug } from '@common/plugs/SearchPlug/SearchPlug';
import InputSearch from '@common/InputSearch/InputSearch';

import { useRequestCollectionInfiniteQuery } from '../../utils/api/hooks';
import { useInView } from 'react-intersection-observer';

export const NftColectionsPage: React.FC = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useRequestCollectionInfiniteQuery();
  const { inView, ref } = useInView();

  React.useEffect(() => {
    if (inView) {
      console.log('@@@');
      fetchNextPage();
    }
  }, [inView, data]);

  if (isLoading || !data) return <div>Loading...</div>;

  const collections = data.pages.reduce((collections, { data }) => [...collections, ...data.nft_collections], []);

  return (
    <div className='grid w-screen justify-center'>
      <div className='w-[80vw] max-w-3xl'>
        <div className='relative flex h-screen w-full flex-col bg-[#10161F]'>
          <div className='mb-2 max-h-[760px]'>
            <h1 className='m-2 text-center text-xl'>Collections</h1>
            <div className='overflow-scrol max-h-[95%] overflow-x-hidden p-4'>
              {collections.map((collection: any, index: number) => {
                return (
                  <div className='flex h-24 items-center bg-[#1D2633]'>
                    <div className='m-auto flex items-center'>
                      <div className='mr-5'>{index}</div>
                      <div className='mr-5'>{collection.address}</div>
                      <button className='flex h-9 flex-row items-center justify-center rounded-2xl bg-[#2E3847] px-4'>Select</button>
                    </div>
                  </div>
                );
              })}
              <div ref={ref} />
            </div>
          </div>
          <InputSearch />
        </div>
      </div>
    </div>
  );
};
