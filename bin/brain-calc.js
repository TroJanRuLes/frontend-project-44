#!/usr/bin/env node

import { generateCalcQuestion } from '../src/gameLogic.js';
import runGame from '../src/runGame.js';

const gameRules = 'What is the result of the expression?';
runGame(gameRules, generateCalcQuestion);