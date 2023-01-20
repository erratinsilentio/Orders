import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../data";
import { changeOrderStatus } from "../api/orders";
import { AirTwoTone, PlaylistAddOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deposit } from "./moneySlice";

export interface OrderSlice {
  id: string;
  tytul: string;
}

const initialState: OrderSlice[] = [];

export const moneySlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
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
