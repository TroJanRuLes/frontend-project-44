#!/usr/bin/env node

import gameLogic from '../src/gameLogic.js';
import runGame from '../src/runGame.js';

const gameRules = gameLogic.rules;
runGame(gameRules, gameLogic.generateQuestion);