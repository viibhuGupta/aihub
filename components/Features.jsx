import React from 'react'
import FeaturesCard from './FeaturesCard'
import { blogContent, designContent , articleContent,seoContent, writingContent} from '@/Data'


const Features = () => {

  return (
    <>
    <div className=" w-full h-full flex flex-col gap-11 mt-[5rem] " >
            <div className="flex justify-center">
                <h1 className='heading text-5xl font-bold text-center '>Our Features</h1>
            </div>

            <div className="grid grid-cols-3 gap-[3rem] ml-[17rem]  mr-[10rem]   justify-center  ">
                <FeaturesCard content = {blogContent} />
                <FeaturesCard content = {articleContent} />
                <FeaturesCard content = {designContent} />
                <FeaturesCard content = {seoContent} />
                <FeaturesCard content = {writingContent} />
                <FeaturesCard content = {blogContent} />
            </div>
    </div>
    </>
  )
}

export default Features 