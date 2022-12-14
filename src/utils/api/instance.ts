import axios from "axios";

export const api = axios.create({
    baseURL: 'https://tonapi.io/v1/nft/'
})