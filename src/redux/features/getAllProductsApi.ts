import { baseApi } from "../api/baseApi";

const getAllProductsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url: '/products',
                method: 'GET'
            }),
        }),
    }),
});

export const { useGetAllProductsQuery } = getAllProductsApi;