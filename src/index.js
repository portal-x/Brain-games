import readlineSync from 'readline-sync';

const userName = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};

export const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const gameEngine = (task, expression) => {
  console.log('Welcome to the Brain Games!');
  const uname = userName();
  console.log(task);
  for (let counter = 0; counter < 3; counter += 1) {
    const questionAndAnswer = expression();
    const question = questionAndAnswer[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer:');
    const rightAnswer = String(questionAndAnswer[0]);
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.
      Let's try again, ${uname}.`);
    }
  }
  return console.log(`Congratulations, ${uname}`);
};


export default userName;
