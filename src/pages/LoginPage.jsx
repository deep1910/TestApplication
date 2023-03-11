import React from 'react'
import { LoginForm } from '../components'
import { useSelector } from 'react-redux'

const LoginPage = () => {
  const user = useSelector(state => state.auth.user)
  const rollNumber = useSelector(state => state.auth.rollNumber)
  return (
    <div className='p-8 w-full h-screen flex gap-10 items-center'>
      <div className="w-[75%] bg-yellow-200 h-full grid place-items-center">
        <h1 className='text-2xl tracking-widest font-semibold'>Studend Login Portal</h1>
        <h1 className='text-2xl tracking-widest font-semibold'>{user}</h1>
        <h1 className='text-2xl tracking-widest font-semibold'>{rollNumber}</h1>
        </div>
      <div className="w-[25%] h-[55%] bg-yellow-300 p-8 rounded">
        <LoginForm></LoginForm>
      </div>
    </div>
  )
}

export default LoginPage