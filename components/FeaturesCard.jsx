import Image from 'next/image'
import React from 'react'

const FeaturesCard = ({content}) => {

  const {image ,title , decs , para, icon }  = content;
  return (
    <>
    <div className=" w-[26rem] h-[12rem]  border-2 border-slate-100   rounded-md flex flex-row ">
      <div className="m-8 flex gap-11 ">
      <div className="flex ">
       <Image
       src={image}
       alt='content'
       width={68}
       height={60}
       />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className='heading text-xl font-semibold'>{title}</h2>

        <p>{decs} </p>
        <div className="flex flex-row gap-1 ">
          <p>{para} </p>
          <div className="flex justify-center ">
            <Image
            src={icon}
            alt='arrow'
            height={18}
            width={18}
            />
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default FeaturesCard