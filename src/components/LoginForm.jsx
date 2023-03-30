import React, { useState } from 'react'
import CustomInput from './CustomInput'
import Button from './Button'
import PasswordInput from './PasswordInput'
import { StudentLogin } from '../api'
import { useDispatch} from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  //navigate
  const navigate = useNavigate()

  //redux toolkit hooks
  const dispatch = useDispatch()

  const handleLogin = async() => {
    if(!userId || !password ){
      alert('please enter the credentials')
    }
    const credentials = {
      userId, password
    }
    try {
      const res = await StudentLogin(credentials)
      const data = await res.data
      const { name, rollNumber, university, token } = await data.user
      // console.log(data)
      // localStorage.setItem('studentTestApp', name); // temproary Not a secure solutionnpm 
      dispatch(setUser({
        name: name,
        rollNumber: rollNumber,
        university: university,
        token: token
      })) // successfull implementation of auth with user
      // console.log(university)
      // await alert(`Welcome ${name} your rollNumber is ${rollNumber}`)
      navigate('/')
    }catch (e) {
      alert('Login Error'+ e)
      console.log(e)
    }
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