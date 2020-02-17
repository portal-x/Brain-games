import { GameEngine } from '..';

const Task = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const CheckAnswer = (arg1, arg2) => arg1 === arg2;
const expression = (RandomNumber) => {
  const num = (RandomNumber > 1) ? RandomNumber : RandomNumber + 2;
  console.log(`Question: ${num}`);
  for (let count = num - 1; count > 1; count -= 1) {
    if (num % count === 0) {
      return 'no';
    }
  } return 'yes';
};
const RightAnswer = (arg) => arg;
const PrimeGames = () => GameEngine(Task, expression, CheckAnswer, RightAnswer);

export default PrimeGames;
