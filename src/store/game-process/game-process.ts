import { createSlice } from '@reduxjs/toolkit';
import { GameProcess } from '../../types/store';

const initialState: GameProcess = {
  isRoundStart: false,
};

const gameProcess = createSlice({
  name: 'userProcess',
  initialState,
  reducers: {
    startRound (state) {
      state.isRoundStart = true;
    },
  },
});


export default gameProcess;
export const {startRound} = gameProcess.actions;
