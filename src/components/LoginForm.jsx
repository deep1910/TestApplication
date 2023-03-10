import React, { useState } from 'react'
import CustomInput from './CustomInput'
import Button from './Button'
import PasswordInput from './PasswordInput'
import { StudentLogin } from '../api'

const LoginForm = () => {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async() => {
    if(!userId || !password ){
      alert('please enter the credentials')
    }
    const credentials = {
      userId, password
    }
    
    const res = await StudentLogin(credentials)
    const data = await res.data
    const { name ,rollNumber} = await data.user
    // console.log(data)
    localStorage.setItem('studentTestApp',name); // temproary Not a secure solution
    await alert(`Welcome ${name} your rollNumber is ${rollNumber}`)
  }

  return (
    <div className='mt-2'>
      <h1 className='text-xl'>Login</h1>
      <CustomInput setInput={setUserId} placeHolderText='User Id' ></CustomInput>
      <PasswordInput setPassword={setPassword} placeHolderText='Password'></PasswordInput>
      <Button onClick={handleLogin} extraClass='w-full mt-4 h-12' text='Login'/>
    </div>
  )
}

export default LoginForm