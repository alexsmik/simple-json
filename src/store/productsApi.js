// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: "https://raw.githubusercontent.com/alexsmik/redux-toolkit-shopping-cart/main/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products.json`,
    }),
  }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = productsApi;
