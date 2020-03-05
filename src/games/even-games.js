import gameEngine from '..';
import randomNum from '../utils';

const task = 'Answer "yes" if the number is even, otherwise answer "no"';
const minNumber = 1;
const maxNumber = 100;

const generateGameData = () => {
  const question = randomNum(minNumber, maxNumber);
  const rightAnswer = ((question % 2 === 0) ? 'yes' : 'no');
  return [rightAnswer, question];
};

const runEvenGames = () => gameEngine(task, generateGameData);

export default runEvenGames;
