import React, { useEffect } from 'react'
import { Question, Button, QuestionNavElement, Timer } from '../components'
import { useState } from 'react'
import { data } from '../Data/dummyData'
import { useNavigate } from 'react-router-dom'


const testEndTime =  "March 12, 2023 11:26:30"
const Test = () => {

  const navigate = useNavigate()

  const [currQuestion, setCurrQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [finishTest, setFinishTest] = useState(false) // this is creating problem.


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
        // document.addEventListener('offline', alert('You are offline'))
        document.addEventListener('fullscreenchange', () => {
          // test finishing logic here
          navigate('/')    // I have to uncomment this code  commented only for testing purpose.
          alert('Test Submitted due to full screen disable')
          document.removeEventListener('fullscreenchange')
          // working smoothly good : student can only click on test once.
        })
      }, 2000)
    }
    // return () => {document.removeEventListener('offline', alert('You need to go online')) }
  }, [])

  useEffect(() => {
    finishTest && alert('test finished')
  }, [finishTest])

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
        <div className="h-[50%] w-full rounded-xl p-4 overflow-auto flex flex-col items-center justify-center gap-3 text-center text-red-500">
          <h1 className='font-bold tracking-wider text-black text-2xl'>Time left</h1>
          <Timer setFinishTest={setFinishTest} deadline={testEndTime}></Timer>
        </div>
      </div>
    </main>
  )
}

export default Test