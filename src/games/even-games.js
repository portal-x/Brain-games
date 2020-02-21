import { gameEngine, randomNum } from '..';

const task = 'Answer "yes" if the number is even, otherwise answer "no"';

const expression = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const num = randomNum(minNumber, maxNumber);
  const questionAndAnswer = [];
  questionAndAnswer[0] = ((num % 2 === 0) ? 'yes' : 'no');
  questionAndAnswer[1] = num;
  return questionAndAnswer;
};

const evenGames = () => gameEngine(task, expression);

export default evenGames;
