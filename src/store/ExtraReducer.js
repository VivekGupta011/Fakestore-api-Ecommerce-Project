import { json } from "react-router-dom";
import { toast } from "react-toastify";
const { createSlice } = require('@reduxjs/toolkit');

// const initialState={
//     cartItems:[],
//     cartTotalAmount:0,
//     cartTotalQuantity:0
// };
const cartSlice = ExtraReducer({
    name: 'ExtraReducer',
    // initialState: { getCount: 0, getTotal: 0, products: localStorage.getItem("cartItems") ? [JSON.parse(localStorage.getItem("cartItems"))] : [] },
    initialState: { CheckBoolean:false },
    reducers: {
        ReducerCheck(state, action,BooleanValue) {
           state.CheckBoolean=BooleanValue;
        }
    }
});

// extracting actions reducers
export const { ReducerCheck} = cartSlice.actions;
export default cartSlice.reducer;
