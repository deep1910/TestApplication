import React, { useState } from 'react'
import Button from "./Button"

const optionsArr = ['fine', 'excellent', "neutral", 'not good']

const Question = ({ Question="How are you ?", options = optionsArr, isMcq }) => {

  const [select, setSelect] = useState([false,false,false,false])

  const handleOnSelect = (index) => {
    let newArr = [false, false, false, false]
    newArr[index] = true
    setSelect(newArr)
  }
  return (
    <div>
      <div className="w-full h-auto p-4 bg-slate-100 rounded-lg flex gap-4 mb-2">
        <p>Question:</p>
        {Question}
      </div>
      <div className="">
        {/* options */}
        {
          options.map((curr, index) => {
            return(
              <div key={curr} onClick={() => handleOnSelect(index)} className={`w-full px-8 py-4 border border-slate-400 h-auto mb-1 rounded-lg cursor-pointer flex active:bg-orange-400 justify-between transition-all duration-150 hover:bg-green-300 hover:font-bold hover:tracking-wider ${(select[index] === true ? 'bg-green-400' : 'bg-white')}`}>
                <p><span className='font-bold'>{index === 0 ? 'a. ': index === 1 ? 'b. ': index === 2 ? 'c. ': 'd. '}</span>{curr}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Question