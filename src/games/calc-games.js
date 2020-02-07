import { GameEngine } from '..';

const Task = 'What is the result of the expression?';
const CheckAnswer = (arg1, arg2) => arg1 === +arg2;
const expression = (arg1, arg2) => {
  const SymbolsCollection = ['+', '-', '*'];
  const MathSymbol = SymbolsCollection[Math.floor(Math.random() * 3)];
  let RightAnswer;
  switch (MathSymbol) {
    case '*':
      RightAnswer = arg1 * arg2;
      console.log(`Question: ${arg1} * ${arg2}`);
      break;
    case '-':
      RightAnswer = arg1 - arg2;
      console.log(`Question: ${arg1} - ${arg2}`);
      break;
    case '+':
      RightAnswer = arg1 + arg2;
      console.log(`Question: ${arg1} + ${arg2}`);
      break;
    default:
      break;
  } return RightAnswer;
};
const RightAnswer = (arg) => arg;
const CalcGames = () => GameEngine(Task, expression, CheckAnswer, RightAnswer);

export default CalcGames;
