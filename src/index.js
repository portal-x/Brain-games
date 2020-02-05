import readlineSync from 'readline-sync';

const UserName = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};

export const ParityCheck = () => {
  const Uname = UserName();
  const RandomNumber = () => Math.floor(Math.random() * 100);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let number;
  let answer;
  for (let counter = 0; counter < 3; counter += 1) {
    number = RandomNumber();
    console.log(`Question: ${number}`);
    answer = readlineSync.question('Your answer:');
    if (((number % 2 === 0) && answer === 'yes') || ((number % 2 !== 0) && answer === 'no')) {
      console.log('Correct!');
    } else {
      const RightAnswer = (number % 2 === 0) ? 'yes' : 'no';
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${RightAnswer}.
      Let's try again, ${Uname}`);
    }
  }
  return console.log(`Congratulations, ${Uname}`);
};


export default UserName;
