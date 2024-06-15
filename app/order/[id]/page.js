import { getProduct } from '@/app/api/products/route'
import OrderPage from '@/components/OrderPage';
import React from 'react'

export async function generateStaticParams() {
    const products = getProduct();
    return products.map((product) => ({id : product.id.toString()}));
}
const page = ({params }) => {
    const products = getProduct(params.id)
  return (
    <div> 
        <OrderPage data={products}/>
    </div>
  )
}

export default page