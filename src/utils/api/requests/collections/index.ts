import { api } from '../../instance';
import { AxiosRequestConfig } from 'axios';

interface RequestCollectionsParam {
  params: { limit: number; offset: number };
  config?: AxiosRequestConfig<{ limit: number }>;
}

export const requestCollections = ({ params, config }: RequestCollectionsParam) => {
  return api.get('getCollections', { ...config, params });
};
