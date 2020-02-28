import readlineSync from 'readline-sync';

const userName = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};

const gameEngine = (task, gameData) => {
  console.log('Welcome to the Brain Games!');
  const uname = userName();
  const numberOfRaunds = 3;
  console.log(task);
  for (let counter = 0; counter < numberOfRaunds; counter += 1) {
    const questionAndAnswer = gameData();
    const question = questionAndAnswer[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = questionAndAnswer[0];
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.
      Let's try again, ${uname}.`);
      return;
    }
  }
  console.log(`Congratulations, ${uname}`);
};


export default gameEngine;
