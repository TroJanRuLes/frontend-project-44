#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomInt} from '../src/gameLogic.js';
const playEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomInt(1, 100);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is invalid input!`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

playEvenGame();