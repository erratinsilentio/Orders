import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
export const moneySlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        add: (state, action) => {
            console.log(action.payload);
            state.push({
                id: String(action.payload[0].id),
                tytul: action.payload[0].tytul,
            });
        },
        pay: (state, action) => {
            state = state.splice(state.findIndex(function (i) {
                return i.id === action.payload;
            }), 1);
        },
    },
});
export const { add, pay } = moneySlice.actions;
export default moneySlice.reducer;
