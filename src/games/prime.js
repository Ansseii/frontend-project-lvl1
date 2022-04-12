import run from '../engine.js';
import getRandomInt from '../util.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isDivisibleBy = (number, divider) => number % divider === 0;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const ceilLeastDivider = Math.ceil(Math.sqrt(number));
  for (let i = 2; i <= ceilLeastDivider; i += 1) {
    if (isDivisibleBy(number, i)) {
      return false;
    }
  }
  return true;
};

const makeQuestion = () => {
  const question = getRandomInt();
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};

export default () => run({ rules, makeQuestion });
