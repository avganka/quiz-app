import { createSlice } from '@reduxjs/toolkit';
import { GameProcess } from '../../types/store';

const initialState: GameProcess = {
  isRoundStart: false,
};

const gameProcess = createSlice({
  name: 'userProcess',
  initialState,
  reducers: {
    startRoundTimer (state) {
      state.isRoundStart = true;
    },
    stopRoundTimer (state) {
      state.isRoundStart = false;
    },
  },
});


export default gameProcess;
export const {startRoundTimer, stopRoundTimer} = gameProcess.actions;
