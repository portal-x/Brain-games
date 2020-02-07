import { GameEngine } from '..';

const Task = 'Answer "yes" if the number is even, otherwise answer "no"';
const CheckAnswer = (number, answer) => (((number % 2 === 0) && answer === 'yes') || ((number % 2 !== 0) && answer === 'no'));
const expression = (arg1) => {
  console.log(`Question: ${arg1}`);
  return arg1;
};
const RightAnswer = (arg) => ((arg % 2 === 0) ? 'yes' : 'no');
const EvenGames = () => GameEngine(Task, expression, CheckAnswer, RightAnswer);

export default EvenGames;
