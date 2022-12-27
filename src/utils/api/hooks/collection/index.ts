import { useQuery } from "react-query";
import { requestCollection } from "../../../../utils/api/requests";


  export const useRequestCollection = (message?: string) =>
 {
  return useQuery<any>( ['collection'], 
  () =>  requestCollection({params:{account: message || ""}}),
  {
    retry:false,
    refetchOnWindowFocus: true,
    enabled: false, // disable this query from automatically running
    cacheTime: 0
  });
 }