import React from 'react'
import TestComp from '../components/TestComp'
import Button from '../components/Button'

const Test = () => {
  return (
    <main className='w-screen h-screen text-center bg-orange-300 flex p-8 gap-8'>
      <div className="bg-white h-full w-[70%] rounded-xl p-4 text-start overflow-auto relative">
        <TestComp></TestComp>
        <div className='absolute bottom-0 left-0 w-full h-auto flex justify-between p-4'>
          <Button text='Prev'></Button>
          <Button text='Next'></Button>
        </div>
      </div>
      <div className='h-full w-[30%] rounded-xl text-start'>
        <div className="bg-white h-[50%] w-full rounded-xl p-4 text-start overflow-auto"></div>
        <div className="h-[50%] w-full rounded-xl p-4 text-start overflow-auto grid place-items-center text-center text-red-500">Warning</div>
      </div>
    </main>
  )
}

export default Test