import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const gameEngine = (task, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}`);
  console.log(task);
  for (let counter = 0; counter < numberOfRounds; counter += 1) {
    const [rightAnswer, question] = generateGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.
      Let's try again, ${userName}.`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

export default gameEngine;
