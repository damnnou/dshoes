import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'api/products',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ac.cnstrc.com/browse'}),
    endpoints: (builder) => ({
        getProducts: builder.query({
          query: ({page, count}) => `collection_id/most-wanted-new?c=ciojs-client-2.29.9&key=key_XT7bjdbvjgECO5d8&i=458569db-a102-49fc-8931-c35b20b79029&s=1&page=${page}&num_results_per_page=${count}&_dt=1662752559635]`,
        }),
    }),
})

export const { useGetProductsQuery } = productApi