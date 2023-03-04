import React, { useState } from 'react'

const QuestionNavElement = ({
    setCurrQuestion = () => { },
    index,
    currQuestion
}) => {

    const [bookmark, setBookmark] = useState(false)

    return (
        <div className={`${currQuestion === index ? 'bg-yellow-300' : 'bg-orange-400'} text-white font-semibold flex items-center justify-center rounded cursor-pointer ${bookmark && 'bg-purple-400'}`}
        onClick={() => setCurrQuestion(index)}
        onDoubleClick={() => setBookmark(!bookmark)}
        >
        {index + 1}
        </div>
    )
}

export default QuestionNavElement