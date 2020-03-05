import gameEngine from '..';
import randomNum from '../utils';

const task = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

const getCommonBiggestDivisor = (num1, num2) => {
  let commonSmallerDivisor = (num1 >= num2) ? num2 : num1;
  while ((num1 % commonSmallerDivisor !== 0) || (num2 % commonSmallerDivisor !== 0)) {
    commonSmallerDivisor -= 1;
  } return commonSmallerDivisor;
};

const generateGameData = () => {
  const num1 = randomNum(minNumber, maxNumber);
  const num2 = randomNum(minNumber, maxNumber);
  const question = (`${num1} ${num2}`);
  const rightAnswer = String(getCommonBiggestDivisor(num1, num2));
  return [rightAnswer, question];
};

const runCommonDivisorGames = () => gameEngine(task, generateGameData);

export default runCommonDivisorGames;
