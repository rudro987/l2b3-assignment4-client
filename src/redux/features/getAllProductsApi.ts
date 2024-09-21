import { baseApi } from "../api/baseApi";
import qs from 'qs';
  
const getAllProductsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        
        getAllProducts: builder.query({
            query: (query) => ({
                
                url: `/products?${qs.stringify(query, { skipNulls: true })}`,
                method: 'GET'
            }),
        }),
    }),
});

export const { useGetAllProductsQuery } = getAllProductsApi;