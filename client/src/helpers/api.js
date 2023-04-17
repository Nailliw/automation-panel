// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints

export const Api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_APP_SERVER_URI_LOCAL}),
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
        getSystemsActions: builder.query({
            query: () => `system-actions/${name}`,

        }),
        addCorrecao: builder.mutation({
            query: (payload) => ({
                url: `/correcao/${name}`,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            }),
            transformResponse: (response, meta, arg) => response.data,
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
            transformResponse(baseQueryReturnValue, meta, arg) {
                console.log("Iniciando nova solicitação")
                localStorage.setItem("newSolicitation", JSON.stringify(baseQueryReturnValue))
            }
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetFunctionalitiesListQuery, useGetRecentLogsQuery, useGetValidacaoLogsQuery, useAddCorrecaoMutation,
    useAddNewSolicitacaoMutation, useGetSystemsActionsQuery
} = Api