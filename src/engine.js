import {
  getAnswer, greetUser, showCorrectAnswerMessage, showIncorrectAnswerMessage, showWinnerMessage,
} from './cli.js';

const questionsCount = 3;

export default ({ rules, makeQuestion }) => {
  const playerName = greetUser(rules);

  for (let i = 0; i < questionsCount; i += 1) {
    const { question, answer } = makeQuestion();
    const guess = getAnswer(question);

    if (guess === answer) {
      showCorrectAnswerMessage();
    } else {
      showIncorrectAnswerMessage(playerName, guess, answer);
      return;
    }
  }

  showWinnerMessage(playerName);
};
