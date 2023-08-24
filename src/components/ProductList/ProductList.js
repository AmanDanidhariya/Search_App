import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = ({data}) => {
  return (
    <>
    <div>ProductList</div>
    <ProductCard data={data}/>
    </>
  )
}

export default ProductList