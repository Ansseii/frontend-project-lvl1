import run from '../engine.js';
import getRandomInt from '../util.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGcd = (first, second) => (!second ? first : findGcd(second, first % second));

const makeQuestion = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();
  const question = `${firstNum} ${secondNum}`;
  const answer = findGcd(firstNum, secondNum).toString();

  return { question, answer };
};

export default () => run({ rules, makeQuestion });
