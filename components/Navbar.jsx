"use client"
import Link from 'next/link'
import React , {useState} from 'react'
import { AlignRight } from 'lucide-react';

const navData =[
  {
    name : "Home",
    path : "/"
  },
  {
    name : "Quiz",
    path : "/quiz"
  },
  {
    name : "Pricing",
    path : "/pricing"
  },
  {
    name : "Store",
    path : "/store"
  },
  
]

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className=" w-full flex justify-between items-center  bg-transparent p-4 pr-10 pl-10 ">
     
            <Link 
            className='flex items-center gap-4'
            href='/'>
              <span>AIHUB</span> <span className='border-2 hidden lg:flex md:flex w-full bg-rose-400 text-white font-semibold text-lg rounded-lg p-1 pl-6 pr-6 '>Get best Ai</span>
            </Link>

       
    

         
            <ul className=' sm:flex text-xl font-semibold  lg:flex lg:gap-5 md:flex md:gap-3'>

              {
                navData.map((items,index) => {                  
                    return(
                      <li 
                      className='' 
                      key={index}>
                      <Link href={items.path} >{items.name}</Link>
                      </li>
                    )
                })
              }

            </ul>
            {/* "md:flex lg:flex gap-5 hidden " */}
            <div className= {`md:flex lg:flex lg:gap-5 md:gap-3 hidden `}>
              <button>Login</button>
              <button className='btn bg-red-400 text-primary'>Get Started</button>
            </div>

            <button className='lg:hidden md:hidden  '>
            <AlignRight
           
            />
            </button>
        
    </div>
  )
}

export default Navbar;
