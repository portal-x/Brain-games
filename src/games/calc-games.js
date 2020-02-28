import gameEngine from '..';
import randomNum from '../utils';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const minNumber = 0;
const maxNumber = 20;

const generateGameData = () => {
  const arg1 = randomNum(minNumber, maxNumber);
  const arg2 = randomNum(minNumber, maxNumber);
  const mathOperations = operations[randomNum(0, operations.length)];
  const questionAndAnswer = [];
  const question = `${arg1} ${mathOperations} ${arg2}`;
  let rightAnswer;
  switch (mathOperations) {
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
  questionAndAnswer[0] = String(rightAnswer);
  questionAndAnswer[1] = question;
  return questionAndAnswer;
};

const calculationGames = () => gameEngine(task, generateGameData);

export default calculationGames;
