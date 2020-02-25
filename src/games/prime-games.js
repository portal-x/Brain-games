import gameEngine from '..';
import randomNum from '../utils';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const expressionBuilder = () => {
  const minNumber = 2;
  const maxNumber = 100;
  const num = randomNum(minNumber, maxNumber);
  const questionAndAnswer = [];
  const question = num;
  questionAndAnswer[1] = question;
  for (let count = num - 1; count > 1; count -= 1) {
    if (num % count === 0) {
      const rightAnswer = 'no';
      questionAndAnswer[0] = rightAnswer;
      return questionAndAnswer;
    }
  }
  const rightAnswer = 'yes';
  questionAndAnswer[0] = rightAnswer;
  return questionAndAnswer;
};

const primeCheckerGames = () => gameEngine(task, expressionBuilder);

export default primeCheckerGames;
