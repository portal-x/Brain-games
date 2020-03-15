import gameEngine from '..';
import randomNum from '../utils';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const minNumber = -30;
const maxNumber = 100;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let count = 2; count <= (num / 2); count += 1) {
    if (num % count === 0) return false;
  } return true;
};

const generateGameData = () => {
  const question = randomNum(minNumber, maxNumber);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [rightAnswer, question];
};

const runPrimeGames = () => gameEngine(task, generateGameData);

export default runPrimeGames;
