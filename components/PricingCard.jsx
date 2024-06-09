import React from 'react'
import "@/sass/pricingCard.scss"
import { AiOutlineCheck } from "react-icons/ai";

const PricingCard = ({title, price, features}) => {

    // const { title, price, features } = packageData;
  return (
   <main className='pricing-card'>
  
        <h3>{title}</h3>
        <p className='flex gap-1' ><span className='price'>${price}</span> /months</p>

        <div className='features-list'>
        {features.map((feature, index) => (
        <div key={index} className="list">
          <AiOutlineCheck />
          <p>{feature}</p>
        </div>
      ))}

            <button>Get Started</button>
        </div>

   </main>
  )
}

export default PricingCard