import { api } from '../../instance';
import { AxiosRequestConfig } from 'axios';

interface RequestCollectionParam {
  params?: { account: string };
  config?: AxiosRequestConfig;
}

export const requestCollection = ({ params, config }: RequestCollectionParam) => {
  return api.get(`getCollection`, { ...config, params });
};
