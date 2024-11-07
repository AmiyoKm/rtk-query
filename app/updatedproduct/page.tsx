"use client"
import React from 'react'
import { useUpdatedProductsMutation } from '../redux/service/dummyData'

const UpdatedProduct = () => {
    const [updateProduct , { data , isError , isLoading}] = useUpdatedProductsMutation()
    if(isError) return <div>Error</div>
    if(isLoading) return <div>Loading</div>
    const handleUpdateProduct = async () =>{
        try {
                const updatedProducts = {
                
                    title : "Updated Product" ,
                    
                }
             await   updateProduct({id: 1 , updatedProducts})
        } catch (error) {
            console.error("Error update product" , error)
        }
    }
  return (
    <div>
        <h1>{data?.title}</h1>
        <h1>{data?.description}</h1>
        <h1>{data?.price}</h1>
        <h1>{data?.rating}</h1>

        <button disabled={isLoading} onClick={handleUpdateProduct}>Update Product</button>
    </div>
  )
}

export default UpdatedProduct