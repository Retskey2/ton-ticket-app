import { useQuery } from "react-query";
import { requestCollection } from "../../../../utils/api/requests";

  export const useRequestCollection = (address: string) =>
    useQuery<any>( ['collection'], 
    () => {
        return  requestCollection({params:{account: address}})
    },
    {
      refetchOnWindowFocus: true,
       enabled: false, // disable this query from automatically running
    });