import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const initialState = {
  count: 3,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    addByPayload: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
  },
});
export const { increment, decrement, addByPayload } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.count;

export default counterSlice.reducer;
