import React from 'react'
import styled from 'styled-components'

const ResultsStyled = styled.div`
  text-align: center;
`
const Title = styled.h2`
  font-weight: 400px;
  font-size: 30px;
  padding: 15px 15px 0 15px;
`
const ResultsList = styled.ul`
  list-style: none;
  padding: 15px 0;
  display: grid;
  grid-gap: 15px;
`
const ResultItem = styled.li`
`

function Results({ results }) {
  const { correct, wrong } = results
  
  return (
    <ResultsStyled>
      <Title>Results</Title>
      <ResultsList>
        <ResultItem>Correct: {correct}</ResultItem>
        <ResultItem>Wrong: {wrong}</ResultItem>
      </ResultsList>
    </ResultsStyled>
  )
}

export default Results
