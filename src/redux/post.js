import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath : 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shielded-caverns-45156.herokuapp.com/'
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