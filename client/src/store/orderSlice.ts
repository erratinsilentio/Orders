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
      console.log(action.payload);
      state.push({
        id: String(action.payload[0].id),
        tytul: action.payload[0].tytul,
      });
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
