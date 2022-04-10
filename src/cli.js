import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May I have your name? ');

export const greetUser = (gameRules) => {
  console.log('Welcome to the Brain Games!');
  const playerName = askName();
  console.log(`Hello, ${playerName}`);
  console.log(gameRules);

  return playerName;
};

export const showCorrectAnswerMessage = () => console.log('Correct');

export const showIncorrectAnswerMessage = (playerName, guess, correctAnswer) => {
  console.log(`'${guess}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${playerName}!`);
};

export const showWinnerMessage = (playerName) => console.log(`Congratulations, ${playerName}!`);

export const getAnswer = (question) => {
  console.log(`Question: ${question}`);

  return readlineSync.question('Your answer: ');
};
