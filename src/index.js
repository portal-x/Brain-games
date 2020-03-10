import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const gameEngine = (task, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}`);
  const uname = userName;
  console.log(task);
  for (let counter = 0; counter < numberOfRounds; counter += 1) {
    const questionAndAnswer = gameData();
    const [rightAnswer, question] = questionAndAnswer;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
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
