import { gameEngine, randomNum } from '..';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const expression = () => {
  const minNumber = 2;
  const maxNumber = 100;
  const num = randomNum(minNumber, maxNumber);
  const questionAndAnswer = [];
  questionAndAnswer[1] = num;
  for (let count = num - 1; count > 1; count -= 1) {
    if (num % count === 0) {
      questionAndAnswer[0] = 'no';
      return questionAndAnswer;
    }
  }
  questionAndAnswer[0] = 'yes';
  return questionAndAnswer;
};

const primeGames = () => gameEngine(task, expression);

export default primeGames;
