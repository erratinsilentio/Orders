import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../data";
import { changeOrderStatus } from "../api/orders";
import { AirTwoTone } from "@mui/icons-material";
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
    add: (state, action: PayloadAction<OrderSlice>) => {
      //zamówienia mogą zostać dodane do store na podstawie statusu "new", po dodaniu zamówienia
      //jego status zmienia się na "awaiting", po opłaceniu na "payed". Dzięki temu nie musimy robić
      //dodatkowej weryfikacji czy zamówienie nie jest zdublowane.

      changeOrderStatus(action.payload.id, "awaiting").then((res) => {
        state = [...state, { id: res.id, tytul: res.tytul }];
      });
    },
    pay: (state, action: PayloadAction<string>) => {
      //sprawdz czy takie id znajduje sie w store
      const checkIfExists = state.some((order) => order.id === action.payload);
      if (!checkIfExists) throw new Error("Nie ma takiego zamówenia na stanie");
      //wyslij prosbe do servera, by zmienic status zamowienia z takim id na oplacone
      changeOrderStatus(action.payload, "payed")
        .then((res) => {
          //jak sukces, wyslij kwote tego zamowienia do moneyslice
          const dispatch = useDispatch();
          dispatch(deposit(res.kwota));
          //usun oplacone zamowienie z orderslice
          state = state.filter((order) => order.id !== res.id);
        })
        .catch((error) => console.log(error));
    },
  },
});

export const { add } = moneySlice.actions;

export default moneySlice.reducer;

// czy order slice ma przechowywac tylko id i tytul, czy moze cale obiekty?
// na podstronie invoice, formularzem wybieram id zamówienia które ma zostać opłacone?
