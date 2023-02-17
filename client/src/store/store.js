import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import moneyReducer from "./moneySlice";
import orderReducer from "./orderSlice";
export const store = configureStore({
    reducer: {
        modal: modalReducer,
        money: moneyReducer,
        order: orderReducer,
    },
});
