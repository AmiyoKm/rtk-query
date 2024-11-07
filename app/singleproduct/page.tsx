"use client"
import { get } from 'http'
import React from 'react'
import { useGetProductByIdQuery } from '../redux/service/dummyData'

const SingleProduct = () => {
    const {data , isError , isLoading} =useGetProductByIdQuery(5)
    if(isError) return <div>Error</div>
    if(isLoading) return <div>Loading</div>
  return (
    <div>
        
            <h1>{data?.brand}</h1>
            <h1>{data?.category}</h1>
            <p>{data?.description}</p>
        
    </div>
  )
}

export default SingleProduct