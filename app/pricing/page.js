"use client"
import "@/sass/pricing.scss"
import PricingCard from '@/components/PricingCard'
import {  monthlyPackageData ,yearlyPackageData } from '@/Data'
import { useState } from "react"

const page = () => {
const [pricing , setPricing ] = useState("monthly");
const [pricingData , setPricingData] = useState(monthlyPackageData)

  function changePricing (pricing){
  setPricing(pricing)
  if (pricing == "monthly") {
    setPricingData(monthlyPackageData)
  }
  else{
    setPricingData(yearlyPackageData)
  }

  }
  // const monthlyPackages = () => {
  // setPackageName("monthly")
  // }
  // const yearlyPackages = () => {
  //   setPackageName("yearly")
  //   }
// console.log(setPackageName)
  return (
    <main className='price'> 
      <div className='main-top'>

        <div className='head-para'>
        <h1>Pricing plans for teames of all sizes</h1>
        <p>Pricing is a process of fixing the value that a manufacturer will receive in the exchange of services and goods. Pricing method is exercised to adjust the cost of the producer’s offerings suitable to both the manufacturer and the customer.</p>
        </div>


        <div className='package'>
          <button 
          onClick={()=> changePricing ("monthly") }
          className={pricing  == "monthly" ?  "montly-btn" : "package"}
          >Monthly</button>
          <button
          onClick={() => changePricing ("yearly")}
          className={pricing == "yearly" ? "yearly-btn" : "package"}>Yearly</button>
        </div>
        
      </div>



      <div className='pricing-container'>
    {
      pricingData.map(( packageData , index)=> {
        return(
          <PricingCard 
          key={index} 
          {...packageData} />
        )
      })
    }
      </div>

      <div className='main-below'>

      </div>

    </main>
  )
}

export default page