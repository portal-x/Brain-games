import gameEngine from '..';
import randomNum from '../utils';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const minNumber = 2;
const maxNumber = 100;

const checkIsPrime = (num) => {
  for (let count = num - 1; count > 1; count -= 1) {
    const notPrime = (num % count === 0);
    if (notPrime) return false;
  } return true;
};

const generateGameData = () => {
  const num = randomNum(minNumber, maxNumber);
  const questionAndAnswer = [];
  const question = num;
  questionAndAnswer[1] = question;
  const rightAnswer = checkIsPrime(num) ? 'yes' : 'no';
  questionAndAnswer[0] = rightAnswer;
  return questionAndAnswer;
};

const primeCheckerGames = () => gameEngine(task, generateGameData);

export default primeCheckerGames;
