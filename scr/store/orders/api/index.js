import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {URL_BASE_FIREBASE_REALTIME_DATABASE} from '../../../constants/firebase';


export const ordersApi = createApi({
    reducerPath:'ordersApi',
    baseQuery: fetchBaseQuery({baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE}),
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) =>({
                url:'/orders.json',
                method: 'POST',
                body: order,
            })
        })
    }),
});

export const {useCreateOrderMutation}= ordersApi;