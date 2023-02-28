import React from 'react'
import { TestCard } from '../components'

const Home = () => {
  return (
    <div>
      <header className='w-screen h-auto bg-orange-400 py-4 px-8'>
        <p className='font-bold tracking-wider text-lg text-white'>Organization Name</p>
      </header>
      <main className='w-[50%] h-[30rem] m-4 p-4 bg-orange-300'>
        <TestCard></TestCard>
      </main>
    </div>
  )
}

export default Home