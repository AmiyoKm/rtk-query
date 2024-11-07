"use client"
import React from 'react'
import { useAddNewProductMutation } from '../redux/service/dummyData'

const AddNewProduct = () => {
    const [AddNewProduct , { data , isError , isLoading}] = useAddNewProductMutation()
    if(isError) return <div>Error</div>
    if(isLoading) return <div>Loading</div>
    const handleAddNewProduct = async () =>{
        try {
            const newProductData = {
                id: 1 ,
                title : "New Product" ,
                description : "New Description" ,
                price : 10 ,
                discountPercentage : 5 ,
                rating : 4.5 ,
            } 
          await  AddNewProduct(newProductData)
        } catch (error) {
                console.error("Error add new product" , error)
        }
    }
  return (
    <div>
        <h1>{data?.title}</h1>
        <h1>{data?.description}</h1>
        <h1>{data?.price}</h1>
         <div>
        <button onClick={handleAddNewProduct}>Add new product</button>
    </div>
    </div>
   
  )
}

export default AddNewProduct