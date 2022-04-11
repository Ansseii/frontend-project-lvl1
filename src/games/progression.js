import run from '../engine.js';
import getRandomInt from '../util.js';

const rules = 'What number is missing in the progression?';

const generateInitValue = () => getRandomInt();

const generateStep = () => getRandomInt(1, 10);

const generateProgressionLength = () => getRandomInt(5, 10);

const generateHiddenIndex = (progressionLength) => getRandomInt(0, progressionLength - 1);

const generateProgression = () => {
  const progression = [];
  const initValue = generateInitValue();
  const length = generateProgressionLength();
  const step = generateStep();
  const hiddenIndex = generateHiddenIndex(length);
  let hiddenValue = null;

  for (let i = 0; i < length; i += 1) {
    if (hiddenIndex === i) {
      hiddenValue = initValue + i * step;
      progression.push('..');
    } else {
      progression.push(initValue + i * step);
    }
  }

  return [progression, hiddenValue.toString()];
};

const makeQuestion = () => {
  const [progression, answer] = generateProgression();
  const question = progression.join(' ');

  return { question, answer };
};

export default () => run({ rules, makeQuestion });
