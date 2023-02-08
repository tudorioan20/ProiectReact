import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import {place_order } from '../Controllers/Cart_Controller';


export const cartReducers = createApi({
    reducerPath: "cartReducers",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        post_cart:  builder.mutation<[], any>({
            queryFn: async(data) => {
                try{
                    await place_order(data);
                    return { data: data };
                } catch (e){
                    return  { error: e }
                }
            }
        }),
    })
});

export const { usePost_cartMutation } = cartReducers;