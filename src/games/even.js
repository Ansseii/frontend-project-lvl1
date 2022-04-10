import run from '../engine.js';
import getRandomInt from '../util.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const makeQuestion = () => {
  const question = getRandomInt();
  const answer = isEven(question);

  return { question, answer };
};

export default () => run({ rules, makeQuestion });
