import React, { useEffect, useRef, useState } from 'react'
import { FiEye, FiEyeOff} from 'react-icons/fi'

const CustomInput = ({onChange = () => {},
    onKeyUp = () => {},
    value,
    autoFocus = 'false',
    type='text'}) => {

        const [visibleOption, setVisibleOption] = useState(false)
        const [showPassword, setShowPassword] = useState(false)
        const [thisType, setThisType] = useState(type)

        useEffect(() => {
            if(type === 'password'){
                setVisibleOption(true)
            }
        },[])

        useEffect(() => {
            if(showPassword === false){
                setThisType('text')
            } else {
                setThisType('password')
            }
        }, [showPassword])

    return (
        <div className='mt-4 w-full bg-white overflow-hidden rounded-md flex'>
            <input className='w-[85%] h-12 tracking-widest focus:outline-none px-4'
            autoFocus = {autoFocus}
             type={thisType} onChange={onChange} value={value} onKeyUp={onKeyUp}/>
            {
                visibleOption && <div onClick={() => setShowPassword(!showPassword)} className="w-[15%] cursor-pointer grid place-items-center transition-all">
                    {
                        showPassword ? <FiEyeOff/> : <FiEye/>
                    }
                </div>
            }
        </div>
  )
}

export default CustomInput