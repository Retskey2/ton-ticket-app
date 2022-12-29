import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import './index.css';

const queryCLient = new QueryClient();

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <QueryClientProvider client={queryCLient}>
    <App />
  </QueryClientProvider>
);
