import React from 'react'
import { getCategories } from '../api/categories/route'
import { getProduct } from '../api/products/route';
import CategoryListing from '@/components/CategoryListing';
import ProductListing from '@/components/ProductListing';

const  page = async () => {
    const categories = await getCategories();
    // console.log(categories)

    const products = await getProduct();
    // console.log(products)
  return (
    <div className='flex flex-row gap-2  justify-center items-center mt-20'>
       <CategoryListing data = {categories} />
       
       <ProductListing/>
    </div>
  )
}

export default page