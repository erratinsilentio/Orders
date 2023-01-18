import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import moneyReducer from "./moneySlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    money: moneyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
