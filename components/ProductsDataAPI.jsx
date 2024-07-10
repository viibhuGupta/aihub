import Image from "next/image";
import React from "react";
import Skelton from "./Skelton";
import { useCart } from "./CardContext";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");

const ProductsDataAPI = ({ data  }) => {
  
  const {addToCart} = useCart();
  

  return (
    <div className="w-[30rem]  lg:md:w-full h-auto  mt-32 md:ml-[7rem] ">
      <div className="w-[25rem] flex flex-col justify-center gap-10   h-auto p-[1rem]  rounded-md shadow-lg hover:shadow-xl duration-300 ">
        <div className="">
          <h1 className="font-semibold text-lg text-gray-600">{data.title}</h1>
        </div>
        <div className="w-[20rem] h-[20rem] relative ">
          <div className=" absolute inset-0 overflow-hidden ">
            <Image
              src={data.image}
              alt={data.title}
              layout="fill"
              objectFit="contain"
              className="p-6"
            />
          </div>
        </div>

        <div className="flex justify-between items-center ml-[1rem] mr-[1rem]">
          <p className="font-semibold text-xl">₨ {data.price}</p>
          <button
           onClick={()=>addToCart(data)}
            className="bg-rose-300 p-5 rounded-full  text-black font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDataAPI;
