import React from 'react';

import InputSearch from '@common/InputSearch/InputSearch';
import { useRequestCollectionInfiniteQuery } from '../../utils/api/hooks';
import { useInView } from 'react-intersection-observer';
import { getShortToken } from '@utils/helpers';
import { useNavigate } from 'react-router-dom';

import image from '@assets/images/image.png';

export const NftColectionsPage: React.FC = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useRequestCollectionInfiniteQuery();
  const { inView, ref } = useInView();
  const navigate = useNavigate();

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
      <div className='w-[100vw] max-w-3xl'>
        <div className='relative flex h-full min-h-screen w-full flex-col bg-[#10161F] p-4'>
          <div className='mb-2 max-h-[750px]'>
            <h1 className='mt-6 mb-4 text-center text-xl'>Collections</h1>
            <div className='max-h-[90%] overflow-scroll overflow-x-hidden'>
              {collections.map((item: any) => {
                return (
                  <div className='grid h-24 grid-cols-item justify-between bg-[#1D2633] p-4 first:rounded-t-2xl' key={item.address}>
                    <img className='rounded-full' src='' alt='imagenft' />
                    <div className='grid'>
                      <div>Title</div>
                      <div className='text-[#8994A3]'>uknown tickets</div>
                      <div className='text-[#556170]'>{getShortToken(item.address)}</div>
                    </div>
                    <button
                      className='flex h-9 flex-row items-center justify-center rounded-2xl bg-[#2E3847] px-4'
                      onClick={() => navigate(`/nft-page/${item.address}`, { state: { item: item } })}
                    >
                      Select
                    </button>
                  </div>
                );
              })}
              {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load Newer' : 'Nothing more to load'}
            </div>
            <div ref={ref} />
          </div>
          <InputSearch />
        </div>
      </div>
    </div>
  );
};
