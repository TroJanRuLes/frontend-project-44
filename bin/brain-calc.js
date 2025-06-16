#!/usr/bin/env node

import gameLogic from '../src/gameLogic.js';
import runGame from '../src/runGame.js';

runGame(gameLogic.rules, gameLogic.generateQuestion);