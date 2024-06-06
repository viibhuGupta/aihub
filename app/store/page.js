import CategoriesCard from '@/components/CategoriesCard'

import React from 'react'
import getCategory from '../lib/getCategory'

export default async function Page  ()  {
    const categories = await getCategory();
    console.log(categories)
  return (
    <>

   <section className='bg-slate-200 mt-3  '>
    <h1 className='text-5xl justify-center items-center flex '>
        categories
    </h1>
  <div className='flex gap-10 m-9 justify-center' >

{
   categories.map((category) =>{
    return(
        <CategoriesCard key = {category.id}/>
    )
   })
   }
  </div>

   </section>
    </>
  )
}

