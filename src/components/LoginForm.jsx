import React from 'react'
import CustomInput from './CustomInput'
import Button from './Button'
import PasswordInput from './PasswordInput'

const LoginForm = () => {
  return (
    <div className='mt-2'>
      <h1 className='text-xl'>Login</h1>
      <CustomInput placeHolderText='User Id' ></CustomInput>
      <PasswordInput placeHolderText='Password'></PasswordInput>
      <Button extraClass='w-full mt-4 h-12' text='Login'/>
    </div>
  )
}

export default LoginForm