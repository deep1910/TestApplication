import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const TestCard = ({title, testId ,startTime, endTime, date, objectId}) => {
  let navigate = useNavigate()
  //calculate timing here explicitly.
  return (
    <div className='h-[11rem] bg-white w-[9rem] p-4 rounded-lg flex flex-col justify-between'>
        <div className="font-bold text-lg tracking-wider">{title}</div>
        <hr className='bg-orange-300' />
        <p><span className='font-semibold'>Id: </span>{testId}</p>
        <p><span className='font-semibold'>Date: </span>{testId}</p>
        {/* <p><span className='font-semibold'>Time: </span>{timing[0]+':'+timing[1]}</p> */}
        <Button onClick={() => navigate('/info', {state: {objectId, startTime,date, endTime}})} text='Take test'/>
    </div>
  )
}

export default TestCard