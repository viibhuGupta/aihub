import React from 'react'
import { useCart } from './CardContext'
import Image from 'next/image'

const CartProducts = ({data}) => {
    const {image ,title,price,description,category,rating ,id} = data;
    const {removeFromCart} = useCart(); 
    
  return (
   <div className="w-full flex justify-center border-2 border-gray-100 h-auto p-[1rem]  rounded-md shadow hover:shadow-sm duration-300">
    <div className="flex justify-between p-[2rem]">
    
    <div className="w-[20rem] h-[20rem] relative  ">
          <div className=" absolute inset-0 overflow-hidden  bg-transparent ">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="contain"
              className="p-1 bg-rose-300-"  
            />
          </div>
        </div>
    </div>

    <div className="">
    <h1>{category}</h1>
    <h1 className=' '>{title}</h1>
    <h1>{price}</h1>
    <p>{description}</p>
   <button 
   onClick={()=>removeFromCart(id)}
   className='w-[10rem] p-[1rem] bg-rose-400 text-black font-semibold text-xl flex justify-center items-center'>Remove</button>
    </div>
   
   
   </div>
  )
}

export default CartProducts