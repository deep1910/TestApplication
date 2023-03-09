import React, { useEffect } from 'react'
import { Question, Button, QuestionNavElement } from '../components'
import { useState } from 'react'
import { data } from '../Data/dummyData'
import { useNavigate } from 'react-router-dom'


const Test = () => {

  const navigate = useNavigate()

  const [currQuestion, setCurrQuestion] = useState(0)
  const [answers, setAnswers] = useState({})


  const handleNext = () => {
    if (currQuestion !== data.length - 1) {
      setCurrQuestion(currQuestion + 1)
    }
  }

  const handlePrev = () => {
    if (currQuestion !== 0) {
      setCurrQuestion(currQuestion - 1)
    }
  }

  useEffect(() => {
    // the element of fullscreen will be global. so that the changing of screen 
    // can exit the test
    if(document.fullscreenEnabled){
      setTimeout(() => {
        document.addEventListener('fullscreenchange', () => {
          navigate('/')
          alert('Test aborted')
          document.removeEventListener('fullscreenchange')
          // working smoothly good student can only click on test once.
        })
      }, 2000)
    }
  }, [])

  useEffect(() => {
    console.log(answers)
  }, [answers])

  return (
    <main className='w-screen h-screen text-center bg-orange-300 flex p-8 gap-8'>
      <div className="bg-white h-full w-[70%] rounded-xl p-4 text-start overflow-auto relative">
        <Question
          answers={answers}
          questionIndex={currQuestion + 1}
          setAnswers={setAnswers}
          Question={data[currQuestion].question}
          options={data[currQuestion].options}
        ></Question>
        <div className='absolute bottom-0 left-0 w-full h-auto flex justify-between p-4'>
          <Button onClick={handlePrev} text='Prev'></Button>
          <Button onClick={handleNext} text='Next'></Button>
        </div>
      </div>
      <div className='h-full w-[30%] rounded-xl text-start'>
        <div className="bg-white h-[50%] w-full rounded-xl p-4 text-start overflow-auto grid grid-cols-4 grid-rows-5 gap-2">
          {/* List of Questions here */}
          {
            data.map((curr, index) => {
              return (
                <QuestionNavElement
                  currQuestion={currQuestion}
                  index={index}
                  key={index + curr.question}
                  bookmarked={false}
                  setCurrQuestion={setCurrQuestion}
                />
              )
            })
          }
        </div>
        <div className="h-[50%] w-full rounded-xl p-4 text-start overflow-auto grid place-items-center text-center text-red-500">Warning</div>
      </div>
    </main>
  )
}

export default Test