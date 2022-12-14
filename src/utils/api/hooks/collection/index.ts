import { useInfiniteQuery } from "react-query";
import { requestCollection } from "../../requests";

const REQUEST_COLLECTIONS_LIMIT = 10;
export const useRequestCollectionInfiniteQuery = () => 
    useInfiniteQuery<any>(
        ['collections'],
    ({pageParam = 0}) => {
       return  requestCollection({params: {limit:REQUEST_COLLECTIONS_LIMIT, offset: pageParam}}) 
    },
    {
        getNextPageParam: (lastCollectionsData, allCollectionsData) =>  allCollectionsData.length * REQUEST_COLLECTIONS_LIMIT 
    }
)