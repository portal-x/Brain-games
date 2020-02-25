import gameEngine from '..';
import randomNum from '../utils';

const task = 'Answer "yes" if the number is even, otherwise answer "no"';

const expressionBuilder = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const num = randomNum(minNumber, maxNumber);
  const questionAndAnswer = [];
  const question = num;
  const rightAnswer = ((num % 2 === 0) ? 'yes' : 'no');
  questionAndAnswer[0] = rightAnswer;
  questionAndAnswer[1] = question;
  return questionAndAnswer;
};

const evenCheckerGames = () => gameEngine(task, expressionBuilder);

export default evenCheckerGames;
