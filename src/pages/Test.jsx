import React from 'react'
import { Question, Button } from '../components'
import {useState} from 'react'
import {data} from '../Data/dummyData'

const Test = () => {

  const [currQuestion, setCurrQuestion] = useState(0)

  const handleNext = () => {
    if(currQuestion !== data.length-1){
      setCurrQuestion(currQuestion + 1)
    }
  }

  const handlePrev = () => {
    if(currQuestion !== 0){
      setCurrQuestion(currQuestion - 1)
    }
  }

  return (
    <main className='w-screen h-screen text-center bg-orange-300 flex p-8 gap-8'>
      <div className="bg-white h-full w-[70%] rounded-xl p-4 text-start overflow-auto relative">
        <Question 
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
              return(
                <div className={`${currQuestion === index ?'bg-yellow-300' : 'bg-orange-400'} text-white font-semibold flex items-center justify-center rounded cursor-pointer`}
                onClick={() => setCurrQuestion(index)}
                 key={curr.question}>{index+1}</div>
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