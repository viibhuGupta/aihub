"use client";
import { useCart } from "@/components/CardContext";
import CartProducts from "@/components/CartProducts";
import React from "react";

const page = () => {
  const { cart } = useCart();
  console.log(cart);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="mt-[5rem] text-3xl font-semibold text-gray-500 uppercase">
        Cart Items List
      </h1>
      {
        cart.length === 0  ?  (
            <div className="mt-[5rem] text-2xl font-semibold text-gray-500">
          Your cart is empty.
             </div>
        ) : (
            <div className="flex gap-8 ">
        <div className=" grid grid-row-1 gap-[2rem] m-[1rem]">
          <div className=" flex flex-col gap-[2rem]">
            {cart.map((cartItem) => {
              return <CartProducts key={cartItem.id} data={cartItem} />;
            })}
          </div>
        </div>

        <div className=" flex justify-end w-[25rem] h-auto bg-slate-300 rounded-md items-center">
          <h1 className=" text-3xl font-bold pr-[4rem]  pl-[4rem] p-[1rem]">
            {" "}
            Total Price = {totalPrice}
          </h1>
        </div>
      </div>
        )
      }
    </div>
  );
};

export default page;

// <div className="">
// <div className="">
//     {
//         cart.map((products)=>{
//             return(
//                 <CartProducts key={products.id} data={products}/>
//             )
//         })
//     }
// </div>
// </div>
