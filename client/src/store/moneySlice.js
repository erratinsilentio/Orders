import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    amount: 0,
};
export const moneySlice = createSlice({
    name: "money",
    initialState,
    reducers: {
        withdraw: (state, action) => {
            if (action.payload > state.amount) {
                throw new Error("not enough money!");
            }
            state.amount -= action.payload;
        },
        deposit: (state, action) => {
            if (action.payload < 0)
                return;
            state.amount += Number(action.payload);
        },
    },
});
export const { withdraw, deposit } = moneySlice.actions;
export default moneySlice.reducer;
