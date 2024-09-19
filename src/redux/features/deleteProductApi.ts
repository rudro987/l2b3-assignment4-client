import { baseApi } from "../api/baseApi";

const deleteProductApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            })
        })
    })
})

export const { useDeleteProductMutation } = deleteProductApi;