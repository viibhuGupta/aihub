import Image from 'next/image'
import React from 'react'

const CategoriesCard = () => {
  return (
    <div className="w-[16rem] h-[8rem] flex justify-center relative">
      <Image
        src="/assets/imageAI.jpg"
        fill
        className="rounded-lg"
        alt="Description of the image"
      />
      <div className="absolute bg-black flex justify-center m-10">
        <h1 className="text-white text-3xl flex items-center">Name</h1>
      </div>
    </div>
  )
}

CategoriesCard.displayName = 'CategoriesCard';

export default CategoriesCard;
