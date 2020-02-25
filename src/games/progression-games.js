import gameEngine from '..';
import randomNum from '../utils';

const task = 'What number is missing in the progression?';

const expressionBuilder = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const start = randomNum(minNumber, maxNumber);
  const progressionLenght = 10;
  const rangeDiffValue = 10;
  const diff = randomNum(1, rangeDiffValue);
  const index = randomNum(0, progressionLenght);
  let question = '';
  for (let count = 0; count < progressionLenght; count += 1) {
    if (count === index) {
      question = (count === 0) ? start : `${question} ..`;
    } else {
      question = (count === 0) ? start : `${question} ${start + (diff * count)}`;
    }
  }
  const questionAndAnswer = [];
  const rightAnswer = String(start + (diff * index));
  questionAndAnswer[0] = rightAnswer;
  questionAndAnswer[1] = question;
  return questionAndAnswer;
};

const progressionCheckerGames = () => gameEngine(task, expressionBuilder);

export default progressionCheckerGames;
