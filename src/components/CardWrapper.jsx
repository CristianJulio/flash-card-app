import React, { useEffect, useState } from 'react';
import flashcards from '../db/flashcards';
import Card from './Card';
import Menu from './Menu';
import Message from './Message';

function CardWrapper() {
  const [isAnswerOk, setIsAnswerOk] = useState(null);
  const [data, setData] = useState({
    cards: [],
    currentcard: {},
    wrongAnswers: [],
    counter: 0,
    round: 1
  });
  const { currentcard, wrongAnswers, counter, cards, round } = data;

  useEffect(() => {
    if (counter === 0 && round === 1) sortFlashCardsRandomly();
  }, [counter]);

  const getRandomNumberLessThan = (limit = 10) => {
    return Math.floor(Math.random() * limit);
  };
  const getDistractingAnswers = () => {
    const wrongAnswersArray = [];

    while (wrongAnswersArray.length < 3) {
      const index = getRandomNumberLessThan(20);
      const answerToAdd = flashcards[index].answer;
      wrongAnswersArray.push(answerToAdd);
    }

    return wrongAnswersArray;
  };
  const sortFlashCardsRandomly = () => {
    let randomizedCards = [];

    while (randomizedCards.length < 20) {
      const index = getRandomNumberLessThan(20);
      randomizedCards.push(flashcards[index]);
      randomizedCards = Array.from(new Set(randomizedCards));
    }

    const wrongAnswers = getDistractingAnswers();

    setData((data) => ({
      ...data,
      cards: randomizedCards,
      currentcard: randomizedCards[data.counter],
      wrongAnswers,
    }));
  };

  if(counter === 20) return <Menu setData={setData} sortFlashCardsRandomly={sortFlashCardsRandomly} />
  
  return (
    <div>
      {isAnswerOk === null && (
        <Card currentcard={currentcard} wrongAnswers={wrongAnswers} setIsAnswerOk={setIsAnswerOk} />
      )}
      {isAnswerOk === true && <Message msg="Correct! :)" setData={setData} setIsAnswerOk={setIsAnswerOk} />}
      {isAnswerOk === false && <Message msg="Wrong Answer :(" setData={setData} setIsAnswerOk={setIsAnswerOk} />}
    </div>
  );
}

export default CardWrapper;
