import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=" w-full flex justify-center  bg-transparent ">
      <div className='flex justify-center items-center mt-7 '>
        <ul className='flex gap-[30rem] '>
          <li>
            <Link href='/'>
              <span>AIHUB</span> <span className='border-2 w-full bg-rose-500 text-white font-semibold text-lg rounded-lg p-3 justify-center'>Get best Ai</span>
            </Link>
          </li>
          <li>
            <ul className='flex gap-12'>
              <li>
                <Link href='/store'>Store</Link>
              </li>
              <li>
                <Link href='/'>Our Features</Link>
              </li>
              <li>
                <Link href='/'>Uses</Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="flex gap-5">
              <button>Login</button>
              <button className='btn bg-red-400 text-primary'>Get Started</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
