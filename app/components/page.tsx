"use client"
import { useGetAllProductsQuery } from '../redux/service/dummyData'
import React from 'react'

const AllProducts = () => {
    const {data , isError , isLoading }= useGetAllProductsQuery(null)
    if(isError) return <div>Error</div>

    if (isLoading) return <div>Loading</div>
      
    
  return (
    <div>{
      data?.products.map((p : any)=> (
        <div>
           <h1 key={p.id}>{p.title}</h1>
           <p>{p.description}</p>
        </div>
       
      ))
      }</div>
  )
}

export default AllProducts