import React, { useState } from 'react'
import {FiEye, FiEyeOff} from 'react-icons/fi'
 
const PasswordInput = ({placeHolderText = 'Text Here'}) => {
    const [visible, setVisible] = useState(false)
  return (
    <div className='mt-4 w-full bg-white overflow-hidden rounded-md flex'>
          <input className='w-[85%] h-12 tracking-wide focus:outline-none px-4' type={visible ? 'text' : 'password'} 
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