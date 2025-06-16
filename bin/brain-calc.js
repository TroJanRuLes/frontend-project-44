#!/usr/bin/env node

import { getRandomInt } from '../src/gameLogic.js';

const generateQuestion = () => {
  const a = getRandomInt(1, 25);
  const b = getRandomInt(1, 25);
  const operations = ['+', '-', '*'];
  const op = operations[getRandomInt(0, 2)];
  
  let correctAnswer;
  switch (op) {
    case '+': correctAnswer = a + b; break;
    case '-': correctAnswer = a - b; break;
    case '*': correctAnswer = a * b; break;
    default: throw new Error(`Unknown operator: ${op}`);
  }

  return {
    question: `${a} ${op} ${b}`,
    correctAnswer: String(correctAnswer)
  };
};

export default {
  rules: 'What is the result of the expression?',
  generateQuestion
};