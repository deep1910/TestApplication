import React from 'react'

const Button = ({onClick = () => {}, text='button'}) => {
  return (
    <button className='p-3 text-center w-28 rounded-md font-bold tracking-wider text-white text-lg bg-green-500'>
        {text}
    </button>
  )
}

export default Button