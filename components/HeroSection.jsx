import React from 'react'
import Navbar from "@/components/Navbar";
import Image from "next/image";


const HeroSection = () => {
  return (
   <>
  <div className=" w-full h-full ">

<div className="gradient w-full h-[50rem] flex relative justify-center   ">
  <Navbar/>

  <div className="flex flex-col justify-center gap-7 w-[60rem] h-[26rem] items-center text-center mt-48 ">
    
   <div className="flex flex-col gap-3">

   <h1 className="heading  text-5xl">
    AiHub Help 
    </h1>
    <span className="heading text-5xl">TO</span> 
    <h1 className="heading text-5xl">
    Increase your daily productivity!
    </h1>
    
    <p>
    At nulla tristique facilisis augue. Lectus diam dignissim erat blandit pellentesque egestas nulla a. Nulla consectetur nunc egestas metus pellentesque.
    </p>
   </div>

    <div className="flex gap-4">
     <button className="btn bg-third">
      Get Started
     </button>

     <button className="btn bg-rose-600">
      How its Work
     </button>
    </div>

  </div>
</div>

</div>  
   </>
  )
}

export default HeroSection