import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceData = ({ servicedata }) => {
  // dstructuring
  const { title, dec, images, items } = servicedata;

  return (
    <>
      <div className="flex  justify-center ">
      <div className="w-[80rem] h-auto  rounded-lg bg-slate-50  ">
        <div className="flex m-5 gap-16 ">
          <div className="flex  item-center justify-start m-[2rem]  ">
            <Image
              src={images}
              alt="web"
              width={400}
              height={200}
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col   mt-8 gap-5 ml-3 ">
            <h3 className="heading text-5xl text-rose-800  ">{title}</h3>

            <p className="text-heading text-sm text-slate-600 font-semibold ">
              {dec}
            </p>
            <ul className="  text-slate-700 font-semibold text-xl">
              {items.map((items, i) => (
                <li key={i}>{items}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ServiceData;
