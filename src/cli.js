import readlineSync from 'readline-sync'

const askName = () => readlineSync.question('May I have your name?');

export const greet = () => {
    console.log("Welcome to the Brain Games!");
    const userName = askName();
    console.log(`Hello, ${userName}`);
};