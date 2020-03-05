import gameEngine from '..';
import randomNum from '../utils';

const task = 'What number is missing in the progression?';
const minNumber = 0;
const maxNumber = 100;
const progressionLenght = 10;
const rangeDiffValue = 10;

const generateGameData = () => {
  const start = randomNum(minNumber, maxNumber);
  const diff = randomNum(1, rangeDiffValue);
  const index = randomNum(0, (progressionLenght - 1));
  let question = '';
  for (let count = 0; count < progressionLenght; count += 1) {
    if (count === index) {
      question = (count === 0) ? '..' : `${question} ..`;
    } else {
      question = (count === 0) ? start : `${question} ${start + (diff * count)}`;
    }
  }
  const rightAnswer = String(start + (diff * index));
  return [rightAnswer, question];
};

const runProgressionGames = () => gameEngine(task, generateGameData);

export default runProgressionGames;
