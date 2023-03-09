import { useEffect, useState } from 'react'
import { Button } from '../components'
import { useNavigate } from 'react-router-dom'

const TestInfo = ({
  testName = 'Random Test',
  testId = 'random1023be43',
}) => {
  const navigate = useNavigate()

  const handleFllScreenClick = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  return (
    <main className='w-full h-screen p-16 flex flex-col justify-between items-center'>
      <h1 className='text-2xl text-center font-bold'>{testName}</h1>
      <h1 className='mt-2 text-42xl text-center font-semibold'>Id: {testId}</h1>
      <div className='mb-4 w-full h-[70%] bg-orange-300 rounded-md p-4'>
        <h1 className='text-3xl text-center font-bold mb-2'>Instructions</h1>
        <div className='bg-white overflow-auto w-full h-[80%] p-8'>
          Read the instructions carefully: Before you begin the exam, take some time to carefully read the instructions provided by the exam administrator. This will help you understand the format of the exam, the time allotted for each section, and any specific rules that you need to follow.
          <br />
          Manage your time: MCQ exams are timed, so it's important to manage your time wisely. Try to allocate a set amount of time for each question, and stick to it as closely as possible. If you get stuck on a question, move on and come back to it later.
          <br />
          Read each question carefully: Take the time to read each question carefully, making sure you understand what is being asked. Don't rush through the questions or make assumptions about what the question is <asking className="br"></asking>
          Look for clues in the question: Pay attention to the wording of the question and look for clues that may help you narrow down your answer choices. For example, if the question includes words like "not," "except," or "least," this can help you eliminate some of the answer choices.
          <br />
          Consider all answer choices: Before selecting your answer, consider all of the available answer choices. Don't simply choose the first answer that seems right – take the time to review all of the options and select the one that is the most accurate.
          <br />
          Mark your answer carefully: When you have selected your answer, be sure to mark it clearly and accurately on the answer sheet. Make sure you are marking the correct answer number for the corresponding question.
          <br />
          Manage your anxiety: Test anxiety can be a real problem for some students. Try to manage your anxiety by taking deep breaths, focusing on your breathing, and visualizing yourself doing well on the exam.
          <br />
          Check your work: Once you have completed the exam, take a few minutes to review your answers and make sure you have marked them correctly. Check that you have answered all of the questions and that your answer sheet is complete.
        </div>
      </div>
      <Button onClick={() => {
        navigate('/test')
        handleFllScreenClick()
      }} text='Start Test' extraClass='font-bold p-3'></Button>
    </main>
  )
}

export default TestInfo