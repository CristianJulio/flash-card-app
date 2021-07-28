import React from 'react'
import styled from 'styled-components'

const MessageStyled = styled.div`
  width: 400px;
  box-shadow: 0 3px 18px 0 rgba(0,0,0,.2);
  margin: 50px auto;
  background: #FFF;
  border-radius: 4px;
  padding-bottom: 15px;
`
const Paragraph = styled.p`
  text-align: center;
  padding: 15px;
  font-size: 20px;
`
const Button = styled.button`
  all: unset;
  background: #04724D;
  text-align: center;
  cursor: pointer;
  color: #FFF;
  padding: 5px;
  border-radius: 4px;
  transition: transform .2s;
  display: block;
  margin: 0 auto;

  &:hover {
    transform: scale(1.1);
  }
`

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
    <MessageStyled>
      <Paragraph>{msg}</Paragraph>
      <Button onClick={handleNextQuestionClick}>Next Question</Button>
    </MessageStyled>
  )
}

export default Message
