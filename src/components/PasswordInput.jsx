import React, { useEffect, useState } from 'react'
import {FiEye, FiEyeOff} from 'react-icons/fi'
 
const PasswordInput = ({
  placeHolderText = 'Text Here',
  setPassword = () => {},
}) => {
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState('')

    useEffect(() => {
      setPassword(value)
      // console.log(value)
    },[value])

  return (
    <div className='mt-4 w-full bg-white overflow-hidden rounded-md flex'>
          <input className='w-[85%] h-12 tracking-wide focus:outline-none px-4' type={visible ? 'text' : 'password'} 
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeHolderText}
          />
          <div onClick={() => setVisible(!visible)} className='w-[15%] grid place-items-center cursor-pointer'>
            {
                visible ? <FiEye/> : <FiEyeOff/>
            }
          </div>
    </div>
  )
}

export default PasswordInput