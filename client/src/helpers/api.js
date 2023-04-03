// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints

export const Api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_SERVER_URI_LOCAL }),
  endpoints: (builder) => ({
    getProcessList: builder.query({
      query: () => `sistema`,
    }),
        getFunctionalitiesList: builder.query({
      query: () => `functionality`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProcessListQuery, useGetFunctionalitiesListQuery } = Api