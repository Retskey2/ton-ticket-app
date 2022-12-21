import { useInfiniteQuery } from 'react-query';
import { requestCollections } from '../../requests';

const REQUEST_COLLECTIONS_LIMIT = 10;
export const useRequestCollectionInfiniteQuery = () =>
  useInfiniteQuery<any>(
    ['collections'],
    ({ pageParam = 0 }) => {
      return requestCollections({ params: { limit: REQUEST_COLLECTIONS_LIMIT, offset: pageParam } });
    },
    {
      getNextPageParam: (lastCollectionsData, allCollectionsData) => allCollectionsData.length * REQUEST_COLLECTIONS_LIMIT
    }
  );
