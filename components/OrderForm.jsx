import Image from "next/image";
import Link from "next/link";
import React from "react";

const OrderForm = ({ data }) => {
  if (!data) return null; // Handle case where data is not yet available

  const {
    id,
    slug,
    brand,
    images,
    title,
    short_description,
    detail_description,
    isFeatured,
    isTrending,
    keywords,
    initialPrice,
    currentPrice,
    ratings,
  } = data;

  return (
    <section className="m-[4rem] flex gap-[5rem] flex-row justify-center  ">

        <div className="w-[60rem]  h-[60rem]">
                <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
                <h1 className="text-gray-600e text-lg">{short_description}</h1>
        <div className="w-[60rem]  h-[50rem] relative  ">
       
       <div className="absolute inset-0 overflow-hidden">
       <Image
             
             src={images[0]}
             alt={title}
             layout="fill"
             objectFit="contain"
             className="p-6"
           />
        
       </div>
     
     
     </div>
  <div className="">
  <h1>{currentPrice}</h1>
  <h1>{ratings}</h1>

  </div>
      
        </div>
      

    <div className="w-[50rem] h-auto p-[1rem] bg-slate-500 flex flex-col ">
        <h1>Order Form</h1>
    </div>
    </section>
  );
};

OrderForm.displayName = "OrderForm";

export default OrderForm;
