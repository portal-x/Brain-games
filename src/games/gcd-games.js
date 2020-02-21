import { gameEngine, randomNum } from '..';

const task = 'Find the greatest common divisor of given numbers.';

const expression = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const num1 = randomNum(minNumber, maxNumber);
  const num2 = randomNum(minNumber, maxNumber);
  const questionAndAnswer = [];
  let commonSmallerDivisor = (num1 >= num2) ? num2 : num1;
  while ((num1 % commonSmallerDivisor !== 0) || (num2 % commonSmallerDivisor !== 0)) {
    commonSmallerDivisor -= 1;
  }
  questionAndAnswer[0] = commonSmallerDivisor;
  questionAndAnswer[1] = (`Question: ${num1} ${num2}`);
  return questionAndAnswer;
};

const gcdGames = () => gameEngine(task, expression);

export default gcdGames;
