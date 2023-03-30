import React, { useEffect, useState } from 'react'
import { TestCard } from '../components'
import { getTests } from '../api'
import { useSelector } from 'react-redux'

const Home = () => {


  const {university, token} = useSelector(state => {
    return {
      university: state.auth.university,
      token: state.auth.token,
    }
  })

  const [tests, setTests] = useState([])

  useEffect(() => {
    const getAllTests = async () => {
      try{
        const res = await getTests({ university }, token)
        const data = await res.data
        console.log(data.allTests)
        setTests(data.allTests)
      }catch(e){
        console.log(e)
      }
    }
    getAllTests()
  }, []) // this empty dependency array is important so that infinite loop does'nt occur.

  return (
    <div>
      <header className='w-screen h-auto bg-orange-400 py-4 px-8'>
        <p className='font-bold tracking-wider text-lg text-white'>Organization Name</p>
      </header>
      <main className='w-[50%] h-[30rem] m-4 p-4 bg-orange-300 flex flex-wrap gap-4'>
        {
          tests.map((curr,index) => (
            <TestCard
            key={index+curr.name}
            title={curr.name}
            objectId={curr._id}
            testId={curr.id}
            startTime={curr.startTime}
            endTime={curr.endTime}
            date={curr.date}
            ></TestCard>
          ))
        }
      </main>
    </div>
  )
}

export default Home