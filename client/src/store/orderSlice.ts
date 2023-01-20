import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../data";

export interface OrderSlice {
  id: string;
  tytul: string;
}

const initialState: OrderSlice[] = [];

export const moneySlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Order>) => {
      state.push({ id: action.payload.id, tytul: action.payload.tytul });
    },
    pay: (state, action: PayloadAction<string>) => {
      state = state.splice(
        state.findIndex(function (i) {
          return i.id === action.payload;
        }),
        1
      );
    },
  },
});

export const { add, pay } = moneySlice.actions;

export default moneySlice.reducer;
