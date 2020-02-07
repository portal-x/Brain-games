import readlineSync from 'readline-sync';

const UserName = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};
// const RandomNumber = () => Math.floor(Math.random() * 100);
export const GameEngine = (Task, expression, CheckAnswer, RightAnswer) => {
  const Uname = UserName();
  console.log(Task);
  for (let counter = 0; counter < 3; counter += 1) {
    const RandomNumber1 = Math.floor(Math.random() * 100);
    const RandomNumber2 = Math.floor(Math.random() * 100);
    const question = expression(RandomNumber1, RandomNumber2);
    // console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer:');
    if (CheckAnswer(question, answer) === true) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${RightAnswer(question)}.
      Let's try again, ${Uname}.`);
    }
  }
  return console.log(`Congratulations, ${Uname}`);
};


export default UserName;
