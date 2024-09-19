import { baseApi } from "../api/baseApi";

const updateProductApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateProduct: builder.mutation({
            query: ({productUpdatedData, id}) => ({
                url: `/products/${id}`,
                method: 'PUT',
                body: productUpdatedData,
            }),
        }),
    }),
});

export const { useUpdateProductMutation } = updateProductApi;