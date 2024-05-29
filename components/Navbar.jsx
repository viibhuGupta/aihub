import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex  justify-center items-center  absolute  mt-7 '>
        <ul className='flex gap-[30rem] '>
            <div className="">
            <Link 
           href='/'
           >
           AIHUB <span className='border-2 w-full bg-rose-500 text-white  font-semibold text-lg  rounded-lg p-3 justify-center '>Get best Ai</span>
           </Link>
            </div>

            <div className="flex ">
                <ul className='flex gap-12'>
                    <Link
                    href='/'
                    >About US
                    </Link>
                    <Link
                    href='/'
                    >Our Features 
                    </Link>
                    <Link
                    href='/'
                    >Uses
                    </Link>
                </ul>
            </div>
          
          <div className="flex gap-5">
            <button>
                Login
            </button>

            <button className='btn bg-red-400 text-primary '>
                Get Started
            </button>
          </div>
        

           
        </ul>
    </div>
  )
}

export default Navbar