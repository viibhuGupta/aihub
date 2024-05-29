import Image from "next/image";
import Link from "next/link";
import React from "react";
import ServiceData from "./ServiceData";
import { AppDevelopement , WebDevelopement , MlDevelopement} from "@/Data";


const About = () => {
    console.log(AppDevelopement)
  return (
    <>
      <div className="flex  justify-center flex-col w-full h-full gap-9 bg-slate-500   ">
        <h1 className="heading text-5xl felx text-center  ">
            About US
        </h1>

        <div className=" flex justify-center mt-9">
            <div className="flex gap-7  heading text-2xl w-[52rem]  p-5 rounded-lg bg-rose-400 justify-center text-center ">

                <button className="heading bg-rose-100 p-3 rounded-lg  "> App Developement</button>
                <button className="heading bg-rose-100 p-3 rounded-lg"> App Developement</button>
                <button className="heading bg-rose-100 p-3 rounded-lg"> App Developement</button>

            </div>
        </div>

        <ServiceData servicedata = {AppDevelopement}  />
        <ServiceData servicedata = {WebDevelopement}/>
        <ServiceData servicedata = {MlDevelopement} />
      </div>
    </>
  );
};

export default About;
