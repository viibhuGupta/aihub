import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function () {

    
  return (
    <section className='flex flex-col gap-9'>

        <div className="">
            <h1 className=" text-5xl font-bold items-center flex ">Category Listing</h1>
        </div>
       
       <div className=" grid grid-cols-4  ">
       <Link 
            href="#"
            className='   '
            >
            <div className="">
               <Image 
               src="/json/categories/television.jpg"
               width={180}
               height={180}
               alt='television-imges'
               />
            </div>
            <h1>Television</h1>
            </Link>
       </div>
           
       
    </section>
  )
}
