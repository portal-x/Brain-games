import { gameEngine, randomNum } from '..';

const task = 'What number is missing in the progression?';

const expression = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const start = randomNum(minNumber, maxNumber);
  const progressionLenght = 10;
  const diff = 2;
  const index = randomNum(0, progressionLenght);
  let string;
  for (let count = 0; count < progressionLenght; count += 1) {
    if (count === index) {
      string += ' ..';
    } else {
      string += ` ${start + (diff * count)}`;
    }
  }
  const questionAndAnswer = [];
  questionAndAnswer[0] = start + (diff * index);
  questionAndAnswer[1] = string;
  return questionAndAnswer;
};

const progressionGames = () => gameEngine(task, expression);

export default progressionGames;
