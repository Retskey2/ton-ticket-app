import { api } from "../../instance";
import {AxiosRequestConfig} from 'axios'

interface RequestCollectionParam{
    params: {limit: number, offset: number}
    config?: AxiosRequestConfig<{limit: number}>
}

export const requestCollection = ({params, config}: RequestCollectionParam) => {
    return api.get('getCollections', {...config, params})
}