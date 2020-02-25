import gameEngine from '..';
import randomNum from '../utils';

const task = 'What is the result of the expression?';
const symbols = ['+', '-', '*'];

const expressionBuilder = () => {
  const minNumber = 0;
  const maxNumber = 20;
  const arg1 = randomNum(minNumber, maxNumber);
  const arg2 = randomNum(minNumber, maxNumber);
  const mathSymbol = symbols[randomNum(0, symbols.length)];
  const questionAndAnswer = [];
  const question = `${arg1} ${mathSymbol} ${arg2}`;
  let rightAnswer;
  switch (mathSymbol) {
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

const calculationGames = () => gameEngine(task, expressionBuilder);

export default calculationGames;
