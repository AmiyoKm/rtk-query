"use client"
import React from 'react'
import { useDeleteProductMutation, useGetAllProductsQuery } from '../../redux/service/dummyData'

const DeleteProduct = ({params} : {params : {id : string}}) => {
    const { id} = params
    console.log(id)
    const [deleteProduct , { data , isError , isLoading}] = useDeleteProductMutation()
    
    if(isError) return <div>Error</div>
    if(isLoading) return <div>Loading</div>

    const handleDeleteProduct = async()=>{
        try {
          await   deleteProduct(id)
        } catch (error) {
            console.error("Error delete product" , error)
        }
    }

  return (
    <div>
        <h1>{data?.title + ` successfully deleted`}</h1>
        <button onClick={handleDeleteProduct}>Delete Product</button>
       
    </div>
  )
}

export default DeleteProduct