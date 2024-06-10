"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import "@/sass/_quizPage.scss"
import { questions } from '@/Data';
import Link from 'next/link';

const page = () => {

  const [currentQuestions , setCurrentQuestions] = useState(0);
  const [selectedOption , setSelectedOption] = useState("");
  const [showAnswer , setShowAnswer] = useState(false);
  const [score , setScore] = useState(0);
  const [showResults , setShowResults] = useState(false)
 

  const question = questions[currentQuestions]

  console.log(selectedOption)
  console.log(score)

  function handleSelectedOption  (option){
    setSelectedOption(option);
    setShowAnswer(true);

    if (option === question.answer) {
      setScore((prevScore) => prevScore + 1)
    }
  }

  function handleNext() {
    setCurrentQuestions((prevQn) => {
      const nextQn = prevQn + 1;
  
      // Check if at the last question
      if (nextQn === questions.length) {
        setShowResults(true);
        setCurrentQuestions(0);
        return 0; // Explicitly return 0 to avoid potential infinite loop
      }
  
      setShowAnswer(false);
      return nextQn;
    });
  }

  function handlePrev() {
    setCurrentQuestions((nextQn) => {
      const backQn = nextQn - 1;
      if (backQn >= 0 ) {
        return backQn;
      }
      else{
        return 0;
      }
      
    })
  }

  function restartQuiz (){
    setShowResults(false);
    setCurrentQuestions(0);
  }
  
  

  

  return (
   <>
   {
    showResults ? (
      <div className=' w-[50rem]  m-auto p-5 flex flex-col justify-center items-center  gap-2 bg-slate-200 text-black text-2xl font-semibold'>
        <h1>Your Schore </h1>
        <h3>{score} out {questions.length}</h3>
        <button 
        className='w-[30rem] p-4 flex items-center justify-center bg-rose-300 text-black font-semibold text-2xl rounded-lg ' 
        onClick={restartQuiz}
        >Restart quiz Again </button>
      </div>

    ) : (
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
        <h4 className=''>{currentQuestions + 1 } out of {questions.length}</h4>
        </div>
      </header>

      <section className='question  flex justify-start items-start flex-col gap-8 mb-12 mt-7  '>
        <div className='w-full bg-gray-500 p-[1px]'></div>
       <div className='w-full h-[4rem] flex justify-start items-center '>
       <h1 className='text-white font-bold text-3xl   '> {question.id} . {question.question}</h1>
       </div>
       
       <div className=' flex flex-col gap-8 w-auto h-[25rem]'>
       {
        question.options.map((option, index)=>{
          return(
            <button
            key={index}
            onClick={() => handleSelectedOption(option)}
             className={`${
              showAnswer && option === question.answer ?
              "quiz-correct-ans" :
              showAnswer && option === selectedOption ?
              "quiz-worng-ans" : ""
             } quiz-question quiz-question-media   text-rose-300  text-2xl font-semibold  `}>{option}</button>
          )
        })
      }
       </div>
      
      
      </section>

      <footer className='quiz-footer '>
        <div className='flex gap-2  quiz-text'>
          
        <button 
        onClick={handlePrev}
        className='duration-300  hover:bg-indigo-400 button-outline bg-indigo-300 text-black font-semibold text-2xl'>Prev Que</button>
         
        </div>

        <button 
        onClick={handleNext}
        className='duration-300  button-outline bg-indigo-300 text-black font-semibold text-2xl hover:bg-indigo-400'>Next Que</button>

      </footer>

      </main>
      

    </div>
    )
   }
   </>
  )
}

export default page