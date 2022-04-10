import run from '../engine.js';
import getRandomInt from '../util.js';

const rules = 'What is the result of the expression?';

const operators = new Map([
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
]);

const getRandomOperator = () => {
  const keys = Array.from(operators.keys());

  return keys[Math.floor(Math.random() * keys.length)];
};

const makeQuestion = () => {
  const firstOperand = getRandomInt();
  const secondOperand = getRandomInt();
  const operator = getRandomOperator();

  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = operators.get(operator)(firstOperand, secondOperand).toString();

  return { question, answer };
};

export default () => run({ rules, makeQuestion });
