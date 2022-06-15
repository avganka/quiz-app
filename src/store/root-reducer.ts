import { combineReducers } from '@reduxjs/toolkit';
import gameProcess from './game-process/game-process';

export enum ReducersNames {
  game = 'GAME',
}

export const reducer = combineReducers({
  [ReducersNames.game]: gameProcess.reducer,
});

export type RootState = ReturnType<typeof reducer>;
