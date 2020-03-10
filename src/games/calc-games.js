import gameEngine from '..';
import randomNum from '../utils';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const minNumber = 0;
const maxNumber = 20;

const generateGameData = () => {
  const arg1 = randomNum(minNumber, maxNumber);
  const arg2 = randomNum(minNumber, maxNumber);
  const mathOperation = operations[randomNum(0, (operations.length - 1))];
  const question = `${arg1} ${mathOperation} ${arg2}`;
  let rightAnswer;
  switch (mathOperation) {
    case '*':
      rightAnswer = (arg1 * arg2);
      break;
    case '-':
      rightAnswer = (arg1 - arg2);
      break;
    case '+':
      rightAnswer = (arg1 + arg2);
      break;
    default:
      break;
  }
  return [String(rightAnswer), question];
};

const runCalculationGames = () => gameEngine(task, generateGameData);

export default runCalculationGames;
