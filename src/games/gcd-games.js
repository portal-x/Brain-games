import { GameEngine } from '..';

const Task = 'Find the greatest common divisor of given numbers.';

const CheckAnswer = (num1, num2) => num1 === +num2;

// Common smaller divisor:
const expression = (num1, num2) => {
  console.log(`Question: ${num1} ${num2}`);
  let CommonSmallerDivisor = (num1 >= num2) ? num2 : num1;
  while ((num1 % CommonSmallerDivisor !== 0) || (num2 % CommonSmallerDivisor !== 0)) {
    CommonSmallerDivisor -= 1;
  }
  return CommonSmallerDivisor;
};

const RightAnswer = (arg) => arg;

const GcdGames = () => GameEngine(Task, expression, CheckAnswer, RightAnswer);

export default GcdGames;
