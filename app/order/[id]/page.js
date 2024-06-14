import { getProduct } from '@/app/api/products/route'
import OrderForm from '@/components/OrderForm';
import React from 'react'

export async function generateStaticParams() {
    const products = getProduct();
    return products.map((product) => ({id : product.id.toString()}));
}
const page = ({params }) => {
    const products = getProduct(params.id)
  return (
    <div> 
        <OrderForm data={products}/>
    </div>
  )
}

export default page