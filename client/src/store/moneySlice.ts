import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MoneyState {
  amount: number;
}

const initialState: MoneyState = {
  amount: 0,
};

export const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    withdraw: (state, action: PayloadAction<number>) => {
      if (action.payload > state.amount) {
        throw new Error("not enough money!");
      }
      state.amount -= action.payload;
    },
    deposit: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) return;
      state.amount += Number(action.payload);
    },
  },
});

export const { withdraw, deposit } = moneySlice.actions;

export default moneySlice.reducer;
