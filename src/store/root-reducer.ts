import { combineReducers } from '@reduxjs/toolkit';
import gameProcess from './game-process/game-process';
import questionsData from './questions-data/questions-data';

export enum ReducersNames {
  game = 'GAME',
  questions = 'QUESTIONS',
}

export const reducer = combineReducers({
  [ReducersNames.game]: gameProcess.reducer,
  [ReducersNames.questions]: questionsData.reducer,
});

export type RootState = ReturnType<typeof reducer>;
