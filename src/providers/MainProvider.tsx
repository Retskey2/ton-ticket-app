import { Layout } from '@common';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

import { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { TonProofDemoApi } from '../utils/api/TonProofDemoApi';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

type Props = {};

const MainProvider: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <TonConnectUIProvider
      manifestUrl=' https://ton-ticket-app.vercel.app/tonconnect-manifest.json'
      getConnectParameters={() => TonProofDemoApi.connectWalletRequest}
    >
      <QueryClientProvider client={queryClient}>
        <Layout>{children}</Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </TonConnectUIProvider>
  );
};

export default MainProvider;
