import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductDetailsPage = ({ data }) => {
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
      <div className="w-[60rem]  h-[50rem] relative  ">
        
        <div className="absolute inset-0 overflow-hidden">
       

       {/* For All images in array form */}
        {/* {
          images.map((item,index)=> {
           
            return(
              <Image
              key={index} 
              src={item}
              alt={title}
              layout="fill"
              objectFit="contain"
              className="p-6"
            />
            )
          })
        } */}

        {
          images.length > 0 && (
            <Image
           
              src={images[0]}
              alt={title}
              layout="fill"
              objectFit="contain"
              className="p-6"
            />
          )
        }
         
        </div>
      
      </div>

      <div className="flex flex-col gap-3 w-[30rem] h-auto">
        <h1>{title}</h1>
        <h3>{short_description}</h3>
        <div className="">{ratings}</div>
        <h1>{brand}</h1>
        <h3>₹ {currentPrice}</h3>
        <h5>
          M.R.P <span>{initialPrice}</span>{" "}
        </h5>
        <h1>Features</h1>
        <ul className="flex list-disc flex-col gap-4">
          {detail_description.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>

          
            <Link 
            href={`/order/${id}`}
            className="bg-slate-700 hover:bg-black duration-300 text-white text-xl font-semibold mt-6 p-7 pl-8 w-[15rem] rounded-full flex justify-center ">
              Place Order
            </Link>
         

      </div>
    </section>
  );
};

ProductDetailsPage.displayName = "ProductDetailsPage";

export default ProductDetailsPage;
