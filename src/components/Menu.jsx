import React from 'react'

function Menu({ setData, sortFlashCardsRandomly }) {
  const handlePlayAgainClick = () => {
    setData(data => ({
      ...data,
      currentcard: data.cards[0],
      counter: 0,
      round: data.round + 1
    }))
  }
  const handleStatsClick = () => {
    console.log('Stats');
  }
  const handleShuffleDesck = () => {
    setData(data => ({
      counter: 0,
      round: data.round + 1
    }))
    sortFlashCardsRandomly()
  }
  
  return (
    <div>
      <button onClick={handlePlayAgainClick}>Play Again</button>
      <button onClick={handleShuffleDesck}>Shuffle Desk And Play Again</button>
      <button onClick={handleStatsClick}>See statistics</button>
    </div>
  )
}

export default Menu
