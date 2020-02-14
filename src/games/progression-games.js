import { GameEngine } from '..';

const Task = 'What number is missing in the progression?';
const CheckAnswer = (arg1, arg2) => arg1 === +arg2;
const expression = (StartNum, RandomNum) => {
  const index = (RandomNum > 10) ? Math.floor(RandomNum / 10) : RandomNum;
  let c = StartNum;
  let string = c;
  let NumForCheckAnswer;
  for (let count = 1; count < 10; count += 1) {
    if (count === index) {
      c += 2;
      NumForCheckAnswer = c;
      string += ' ..';
    }
    c += 2;
    string += ` ${c}`;
  }
  console.log(string);
  return NumForCheckAnswer;
};
const RightAnswer = (arg) => arg;
const ProgressionGames = () => GameEngine(Task, expression, CheckAnswer, RightAnswer);

export default ProgressionGames;
