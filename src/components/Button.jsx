import React from 'react'

const Button = ({isSmall='false',
  onClick = () => {},
  extraClass = '',
  text='button'}) => {
  return (
    <>
  {
    isSmall ? 
    <button className={`p-1 ${extraClass} text-center active:scale-90 transition-all duration-150 w-28 rounded-md tracking-wide text-white text-lg bg-green-500`}
    onClick={onClick}
    >
        {text}
    </button>
    :
          <button className={`p-3 ${extraClass} text-center active:scale-90 transition-all duration-150 w-28 rounded-md font-bold tracking-wider text-white text-lg bg-green-500`}>
        {text}
      </button>
  }
  </>
  )
}

export default Button