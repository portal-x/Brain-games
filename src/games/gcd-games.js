import gameEngine from '..';
import randomNum from '../utils';

const task = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

const getCommonSmallerDivisor = (num1, num2) => {
  let commonSmallerDivisor = (num1 >= num2) ? num2 : num1;
  while ((num1 % commonSmallerDivisor !== 0) || (num2 % commonSmallerDivisor !== 0)) {
    commonSmallerDivisor -= 1;
  } return commonSmallerDivisor;
};

const generateGameData = () => {
  const num1 = randomNum(minNumber, maxNumber);
  const num2 = randomNum(minNumber, maxNumber);
  const questionAndAnswer = [];
  const question = (`${num1} ${num2}`);
  const rightAnswer = String(getCommonSmallerDivisor(num1, num2));
  questionAndAnswer[0] = rightAnswer;
  questionAndAnswer[1] = question;
  return questionAndAnswer;
};

const commonDivisorFinder = () => gameEngine(task, generateGameData);

export default commonDivisorFinder;
