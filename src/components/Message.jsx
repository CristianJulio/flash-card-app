import React from 'react'

function Message({ msg, setData, setIsAnswerOk }) {
  const handleNextQuestionClick = () => {
    setData(data => ({
      ...data,
      counter: data.counter + 1,
      currentcard: data.cards[data.counter + 1]
    }))
    setIsAnswerOk(null)
  }
  
  return (
    <div>
      <p>{msg}</p>
      <button onClick={handleNextQuestionClick}>Next Question</button>
    </div>
  )
}

export default Message
