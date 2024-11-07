import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath : 'products',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://dummyjson.com'
    }),
    endpoints : (builder)=> ({
        getAllProducts : builder.query({
            query : ()=> '/products' 
        }),
        getProductById : builder.query({
            query : (id)=> `/products/${id}`
        }),
        addNewProduct : builder.mutation({
            query : (newProduct)=> ({
                url : '/products/add',
                method : "POST",
                headers : {"content-type" : "application/json"},
                body : newProduct
            }),
        }),
        updatedProducts : builder.mutation({
            query : ({id , updatedProducts})=>({
                url : `/products/${id}`,
                method : "PUT",
                headers : {"content-type" : "application/json"},
                body : updatedProducts
            })
        }),
        deleteProduct : builder.mutation({
            query : (id)=>({
                url : `/products/${id}`,
                method : "DELETE",
                headers : {"content-type" : "application/json"},
            })
        })
    }),

}) 
export const {useGetAllProductsQuery , useGetProductByIdQuery , useAddNewProductMutation , useUpdatedProductsMutation , useDeleteProductMutation} = productsApi
