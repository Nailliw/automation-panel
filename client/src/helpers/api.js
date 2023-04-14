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
    getRecentLogs: builder.query({
      query: () => `recent-logs`,
    }),
    getValidacaoLogs: builder.query({
      query: () => `validacao-logs`,
    }),
    addCorrecao: builder.mutation({
      query: (payload) => ({
        url: '/corecao',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Post'],
    }),
    addNewSolicitacao: builder.mutation({
      query: (payload) => ({
        url: '/corecao',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Post'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProcessListQuery, useGetFunctionalitiesListQuery, useGetRecentLogsQuery, useGetValidacaoLogsQuery, useAddCorrecaoMutation, useAddNewSolicitacaoMutation } = Api