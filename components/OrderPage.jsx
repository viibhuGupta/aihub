import Image from "next/image";
import Link from "next/link";
import React from "react";
import OrderForm from "./OrderForm";

const OrderPage = ({ data }) => {
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
    <section className="md:lg:m-[4rem] flex gap-[1rem] flex-col lg:md:flex-row md:flex-col justify-center   items-center   ">
      <div className="lg:w-[60rem] w-[20rem] mt-[1rem] h-auto  lg:h-[46rem]">
        <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
        <h1 className="text-gray-600e text-lg">{short_description}</h1>
        <div className="lg:w-[40rem]  lg:h-[30rem] w-[20rem] h-[10rem] relative flex justify-center items-center m-auto ">
          <div className="absolute inset-0 lg:overflow-hidden  rounded-xl ">
            <Image
              src={images[0]}
              alt={title}
              layout="fill"
              objectFit="contain"
              className="lg:p-2 p-2   "
            />
          </div>
        </div>
        <div className="">
          <h1>{currentPrice}</h1>
          <h1>{ratings}</h1>
        </div>
      </div>

      <div className="">
        <OrderForm 
          title = {title}
         image = {images[0]}
         dec = {short_description}
         price = {currentPrice}
         />
      </div>
    </section>
  );
};

OrderPage.displayName = "OrderPage";

export default OrderPage;
