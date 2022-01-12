import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath : 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:5000/'
    }),
    endpoints:(builder)=> ({
        getAllPost : builder.query({
            query:() => ({
                url: 'allproducts',
                method:'GET'
            })
        })
    })
})

export const {useGetAllPostQuery} = postApi;