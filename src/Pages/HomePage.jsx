import React from 'react'
import { ProductList } from '../Components/ProductList'

function HomePage() {
  return (
    <div className='main' >
        <h1>Browse our catalogue</h1>
        <ProductList />
    </div>
  )
}

export default HomePage