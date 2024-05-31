'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ServiceData from "./ServiceData";
import { contentAI, imageAI, pptAI } from "@/Data";





const About = () => {

const [service , setService] = useState('contentAI');


function chnageTocontentAT () {
setService( "contentAI")
}
function chnageTocimageAI () {
  setService ("imageAI")
  }

function chnageTopptAI () {
    setService("pptAI")
    }


  return (
    <>
      <div className="flex  justify-center flex-col w-full h-full gap-9  mt-14   ">
        <h1 className="heading text-5xl felx text-center  ">Best AI Tools List</h1>

        <div className=" flex justify-center mt-9">
          <div className=" rounded-lg bg-rose-50 w-[43rem] p-2 ">
            <div className="flex gap-7  heading text-2xl w-auto  justify-center text-center  ">
              <button 
              onClick={chnageTocontentAT}
              className={service == 'contentAI'?"active-btn" : " " }>
                
                Content Writting
              </button>
              <button 
              onClick={chnageTocimageAI}
              className={service == 'imageAI'?"active-btn" : " " } >
               
                Image Generator
              </button>
              <button 
              onClick={chnageTopptAI}
              className={service == 'pptAI'?"active-btn" : " " }>
               
                PPT Geanerator
              </button>
            </div>
          </div>  
        </div>

        <ServiceData 
        servicedata={
          service == "contentAI"?contentAI 
          : service == "imageAI"?imageAI 
          : pptAI} />
        
      </div>
    </>
  );
};

export default About;
