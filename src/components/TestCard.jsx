import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const TestCard = ({title="Test #1",testId='0421D',timing=[10,12],date='2/01/2025'}) => {
  let navigate = useNavigate()
  return (
    <div className='h-[11rem] bg-white w-[9rem] p-4 rounded-lg flex flex-col justify-between'>
        <div className="font-bold text-lg tracking-wider">{title}</div>
        <hr className='bg-orange-300' />
        <p><span className='font-semibold'>Id: </span>{testId}</p>
        <p><span className='font-semibold'>Date: </span>{testId}</p>
        <p><span className='font-semibold'>Time: </span>{timing[0]+':'+timing[1]}</p>
        <Button onClick={() => navigate('/info')} text='Take test'/>
    </div>
  )
}

export default TestCard