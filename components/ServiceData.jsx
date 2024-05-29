import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ServiceData = ({servicedata}) => {
 
    // dstructuring
    const  { title , dec , images , items} = servicedata;
   

  return (
    <>
    <div className="">
        <Image
        src={images}
        alt="web"
        width={300}
        height={300}
        />
    </div>
    <div className="flex flex-col gap-1 justify-center ">
        <h3 className="heading text-xl  ">{title}</h3>

        <p className="text-white">{dec}</p>
        <ul className="flex flex-col gap-2 text-center ">
           {
            items.map((items , i) => 
              <li key={i}>{items}</li>
            )
           }
        </ul>
    </div>
    </>
    
    



  )
}

export default ServiceData