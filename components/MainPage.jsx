import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Features from './Features'
import Image from 'next/image'
import SliderPages from './SliderPages'
// import { FcGoogle } from "react-icons/fc";

const MainPage = () => {
  return (
    <div className="mb-[10rem]">

   <HeroSection/>
   <About />
   <Features/>

   <div className="w-full h-auto mt-[10rem]  gradient ">
    <div className="flex justify-center m-1 flex-col ">
        <div className="h-[40rem] w-full bg-primary rounded-bl-full rounded-br-full rounded-bt-full">
            <div className="flex justify-center text-center m-[15rem]">
                <div className="flex flex-col gap-3 text-white font-bold text-7xl">
                <h1 className=' '>
                Say ‘Goodbye’ to the blank
                </h1>
                <h1>
                page <span className='text-rose-500'> for good</span>
                </h1>
                </div>
            </div>
        </div>

        <div className="h-[40rem] w-full bg-slate-50 rounded-tl-full rounded-tr-full  overflow-hidden">
            <div className="text-white flex justify-center text-center m-60  ">
              <div className="">
                <div className="">
                    <div className="">
                        <h1>Get your free account today</h1>
                    </div>
                    <div className="">
                        <button>
                            <div className="relative">
                               {/* <FcGoogle/> */}
                            </div>

                            <h1>signup with google</h1>
                        </button>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
   </div>

   <div className="mt-12 mb-12">
    <SliderPages/>
   </div>
    </div>
  )
}

export default MainPage