import React from 'react'
import Results from './Results';
import styled from 'styled-components';

const MenuStyled = styled.div`
  box-shadow: 0px 3px 18px 0px rgba(0,0,0,.2);
  border-radius: 4px;
  width: 400px;
  background: #FFF;
  margin: 50px auto;
`
const ButtonGroup = styled.div` 
  padding: 0 15px 15px 15px;
  display: grid;
  grid-gap: 15px;
  width: 70%;
  margin: 0 auto;
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

  &:hover {
    transform: scale(1.1);
  }
`

function Menu({ setData, sortFlashCardsRandomly, results }) {  
  const handlePlayAgainClick = () => {
    setData(data => ({
      ...data,
      currentcard: data.cards[0],
      counter: 0,
      round: data.round + 1
    }))
  }
  const handleShuffleDesck = () => {
    setData(data => ({
      counter: 0,
      round: data.round + 1
    }))
    sortFlashCardsRandomly()
  }
  
  return (
    <MenuStyled>
      <Results results={results} />
      <ButtonGroup>
        <Button onClick={handlePlayAgainClick}>Play Again</Button>
        <Button onClick={handleShuffleDesck}>Shuffle Desk And Play Again</Button>
      </ButtonGroup>
    </MenuStyled>
  )
}

export default Menu
