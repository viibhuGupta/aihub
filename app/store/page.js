import CategoriesCard from '@/components/CategoriesCard'
import "@/sass/store.scss"

import React from 'react'
import getCategories from '../lib/getCategories';


export default async function Page  ()  {
    const categories = await getCategories();
    // console.log(categories)
  return (
    <>

   <section className='bg-slate-200 mt-3  '>
    <h1 className='text-5xl justify-center items-center flex '>
        categories
    </h1>
  <div className='flex gap-10 m-9 justify-center' >

{
  
   }
  </div>

   </section>
    </>
  )
}

