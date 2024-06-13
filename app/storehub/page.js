import React from 'react'
import { getCategories } from '../api/categories/route'
import { getProduct } from '../api/products/route';

const  page = async () => {
    const categories = await getCategories();
    // console.log(categories)

    const products = await getProduct();
    console.log(products)
  return (
    <section className='flex flex-col justify-center items-center mt-20'>
        <h1 className='text-6xl  font-semibold  uppercase'>Categories</h1>

        <div>

        </div>
    </section>
  )
}

export default page