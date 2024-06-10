"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import "@/sass/_quizPage.scss"
import { questions } from '@/Data';

const page = () => {
  const [currentQuestions , setCurrentQuestions] = useState(0);
  const question = questions[currentQuestions]
  return (
    <div className='flex flex-col items-center  sm:w-full sm:h-[100vh] bg-quizbg    '>

       <div className=' flex lg:gap-4 lg:mt-[6rem] md:mt-[6rem]  md:gap-4  '> 
       <h1 className=' text-5xl font-extrabold  text-white capitalize'>Welcome To Quiz App! 
       </h1> 
        <div className=' '>
          <Image 
          src="/assets/icons/quiz.svg"
          width={60}
          height={10}
          alt='quiz'
          />
          </div>  
       </div>

       {/*   */}
      <main className='quiz-main  '>

      <header className='quiz-header quiz-header-media '>
        <h1 className='pl-4 pr-4 pt-2 pb-2 text-white font-semibold text-2xl rounded-lg'>Awsome Quiz Application</h1>
        <div className='flex gap-2 button-outline quiz-text items-center'>
          <h3>Time Left</h3>
          <div>08</div>
        </div>
      </header>

      <section className='question  flex justify-start items-start flex-col gap-8 mb-12 mt-7  '>
        <div className='w-full bg-gray-500 p-[1px]'></div>
        <h1 className='text-white font-bold text-3xl '> {question.id}. {question.question}</h1>
       
       
      {
        question.options.map((option)=>{
          return(
            <button className='quiz-question quiz-question-media   text-rose-300  text-2xl font-semibold '>{option}</button>
          )
        })
      }
      
      </section>

      <footer className='quiz-footer '>
        <div className='flex gap-2  quiz-text'>
          <h4 className=''>1 of 5</h4>
          <h3 >Questions</h3>
        </div>

        <button className='button-outline quiz-text'>Next Que</button>

      </footer>
        
      </main>
      

    </div>
  )
}

export default page