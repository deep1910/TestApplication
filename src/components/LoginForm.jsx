import React from 'react'
import CustomInput from './CustomInput'
import Button from './Button'

const LoginForm = () => {
  return (
    <div className='mt-2'>
      <h1 className='text-xl'>Login</h1>
      <CustomInput type='text' autoFocus={true} ></CustomInput>
      <CustomInput type='password' autoFocus={false}></CustomInput>
      <Button extraClass='w-full mt-4 h-12' text='Login'/>
    </div>
  )
}

export default LoginForm