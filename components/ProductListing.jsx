import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductListing = ({ data  , title ,backgroundColor}) => {
    if (!data) return null; // Handle case where data is not yet available

    return (
        <section className='m-10 '>

          <div className="flex justify-center w-full p-4 bg-green-300">
              <h1 className='text-3xl ml-4 text-white font-semibold'>{title}</h1>
            </div>
    <div className="flex flex-col justify-center items-center ">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-20 m-9  place-content-center  ">
                {data.map((product) => {
                  return(
                    <div 
                    className=' w-[30rem] p-3 rounded-md shadow-lg '
                    key={product.id}
                  >
                    <div className="">
                    <h1>{product.brand}</h1>
                
                    </div>
                     
                    <div className=' w-auto  h-[40rem] flex justify-center items-center  relative  '>
                      <Image
                        src={product.images[0]}
                        fill
                        alt={product.title} 
                        className='p-10 rounded-sm'
                      />
                    </div>
                    <div className="flex flex-col gap-3 ">
                   
                    <h1 className='flex justify-center items-center  pt-4 pb-4 text-3xl  font-bold '>{product.title}</h1>
                    <p>{product.short_description}</p>

                    <h3 className='text-3xl'>Current Price <span>{product.currentPrice}</span></h3>
                    <h3 className='text-3xl'>Starting Price <span>{product.initialPrice}</span></h3>
                    <p>{product.ratings} Star </p>
                    <p>{product.detail_description}</p>
                    </div>

                  </div>
                  )
                }
                   
                )}
            </div>
    </div>
           
        </section>
    );
};

ProductListing.displayName = 'ProductListing';

export default ProductListing;
