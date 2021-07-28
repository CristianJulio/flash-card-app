import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const CardStyled = styled.div`
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
  background: #FFFFFF;
  width: 600px;
  margin: 50px auto;
`;
const Question = styled.p`
  background: #04724D;
  padding: 15px 15px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  border-radius: 3px;
`;
const AnswerWrapper = styled.ol`
  display: grid;
  list-style-type: upper-alpha;
  grid-gap: 15px;
  place-items: center;
  padding: 15px;
`;
const Answer = styled.li`
  text-align: left;
  padding: 5px;
  cursor: pointer;
  color: #0d3b66;
  width: 80%;
`;

const Card = ({ currentcard, wrongAnswers, setIsAnswerOk, setResults }) => {
  const { question, answer } = currentcard;
  const combinedAnswers = [answer, ...wrongAnswers];

  const handleAnswerClick = ({ target }) => {
    const text = target.textContent;

    if (text === answer) {
      setIsAnswerOk(true)
      setResults(results => ({
        ...results,
        correct: results.correct + 1
      }))
    } else {
      setIsAnswerOk(false)
      setResults(results => ({
        ...results,
        wrong: results.wrong + 1
      }))
    }
  };
  combinedAnswers.sort()

  return (
    <CardStyled className="card">
      <Question>{question}</Question>
      <AnswerWrapper>
        {combinedAnswers.map((ans, i) => (
          <Answer key={`${ans}${i}`} onClick={handleAnswerClick}>
            {ans}
          </Answer>
        ))}
      </AnswerWrapper>
    </CardStyled>
  );
};

export default Card;
