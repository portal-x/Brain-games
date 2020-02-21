import { gameEngine, randomNum } from '..';

const task = 'What is the result of the expression?';

const expression = () => {
  const minNumber = 0;
  const maxNumber = 20;
  const arg1 = randomNum(minNumber, maxNumber);
  const arg2 = randomNum(minNumber, maxNumber);
  const symbolsCollection = ['+', '-', '*'];
  const mathSymbol = symbolsCollection[randomNum(0, symbolsCollection.length)];
  const questionAndAnswer = [];
  switch (mathSymbol) {
    case '*':
      questionAndAnswer[0] = (arg1 * arg2);
      questionAndAnswer[1] = (`${arg1} * ${arg2}`);
      break;
    case '-':
      questionAndAnswer[0] = (arg1 - arg2);
      questionAndAnswer[1] = (`${arg1} - ${arg2}`);
      break;
    case '+':
      questionAndAnswer[0] = (arg1 + arg2);
      questionAndAnswer[1] = (`${arg1} + ${arg2}`);
      break;
    default:
      break;
  }

  return questionAndAnswer;
};

const calcGames = () => gameEngine(task, expression);

export default calcGames;
